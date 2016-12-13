(function MapFunction() {

    var defaults = {
        zoom: 15,
        latLng: [48.1664, 17.1161]
    };

    var config = {
        element: {
            map: 'map',
            datasetPicker: 'dataset-picker',
            form: 'geodata-form',
            issuelist: 'issues-for-feature'
        },
        url: {
            base: 'http://192.168.1.223:2990/jira',
            form: {
                submit: 'http://192.168.1.223:2990/jira/rest/utopia/1.0/collector/featureCollector'
            },
            search: {
                featureid: function searchIssuesForFeature(featureid) {
                    return 'http://192.168.1.223:2990/jira/rest/api/2/search?jql=%22Feature%20Id%22%20~%20' + featureid;
                }
            }

        },
        tabs: {
            options: {
                el: '#tabs',
                tabNavigationLinks: '.c-tabs-nav__link',
                tabContentContainers: '.c-tab'
            }
        }
    };

    var map, geoLayer, markerClusterLayer;

    document.addEventListener('DOMContentLoaded', function domContentLoaded() {

        map = L.map(config.element.map).setView(defaults.latLng, defaults.zoom);
        map.addLayer(osmTileLayer());

        geoLayer = L.geoJSON(null);
        markerClusterLayer = L.markerClusterGroup();

        map.whenReady(function mapReady() {
            createSelect();
        });

        markerIcon = new L.AwesomeMarkers.icon({
            shadowSize: [0, 0],
            prefix: 'fa',
            icon: 'circle'
        });

        submitFormListener();
        Message.init();
        var tabs = window.tabs(config.tabs.options);
        tabs.init();
    });

    var createSelect = function createSelect() {
        var select = document.getElementById(config.element.datasetPicker);

        if (!Map || !Map.Dataset) {
            console.warn('No dataset has been found.');
            return null;
        }

        var option;
        for (var key in Map.Dataset) {
            if (Map.Dataset.hasOwnProperty(key)) {
                var dataset = Map.Dataset[key];

                option = document.createElement('option');

                option.value = key;
                option.text = dataset.name;

                select.appendChild(option);
            }
        }

        drawMarkers(Map.Dataset[select.value]);

        select.addEventListener('change', function (event) {
            drawMarkers(Map.Dataset[event.target.value]);
        });
    };

    var osmTileLayer = function osmTileLayer() {
        // create the tile layer with correct attribution
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        return new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 20, attribution: osmAttrib});
    };

    var drawMarkers = function drawMarkers(dataset) {
        if (dataset.features.length > 0) {
            if (geoLayer) {
                removeMarkers();
            }

            var geoJSON = dataset.features.map(dataset.toGeoJSON);
            geoLayer = L.geoJSON(geoJSON, {});
            markerClusterLayer.addLayer(geoLayer);

            markerClusterLayer.on('click', showForm);
            map.addLayer(markerClusterLayer);
        }
    };

    var showForm = function showForm(event) {
        var form = document.getElementById(config.element.form);
        form.reset();
        Message.clear();

        var feature = event.layer.feature;
        setFormData(form, feature);

        var featureid = feature.geometry.properties.objectid;
        issues.display(featureid);

        Map.JS.Overlay.show();
    };

    var formValidation = function formValidation() {
        // TODO: add validation later
        return {
            result: true,
            errorCollection: []
        };
    };

    var submitFormListener = function submitFormListener() {
        var form = document.getElementById(config.element.form);

        form.addEventListener('submit', function formSubmitted(event) {
            event.preventDefault();

            var formValidationResult = formValidation();

            if (!formValidationResult.result) {
                // TODO: show validation errors from validation result
                return false;
            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', config.url.form.submit, true);

            xhr.onreadystatechange = function onreadystatechange() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        var response = JSON.parse(xhr.response);

                        var issuekey = response.key ? response.key : '';

                        Message.createMessage('success', 'Issue ' + issuekey + ' has been successfully created.');
                        Message.showMessages();

                        form.reset();
                    } else if (xhr.status.code == 666) {
                        // TODO: handle all Devil's errors :-) (and other errors too...)
                    }
                }
            };

            // var formData = new FormData(this);
            var formData = (function getDataFromForm() {
                var params = [];
                var element;

                for (var i=0; i < form.elements.length; i++) {
                    element = form.elements[i];
                    params.push(element.name + '=' + encodeURIComponent(element.value));
                }

                return params.join('&').replace('%20', '+');
            }());

            xhr.send(formData);

        });
    };

    var setFormData = function setFormData(form, feature) {
        form.querySelector('[name="featureid"]').value = feature.geometry.properties.objectid;
    };

    var removeMarkers = function removeMarkers() {
        markerClusterLayer.removeLayer(geoLayer);
    };

    var Message = {
        init: function init() {
            this.container = document.getElementById('message-container');
            this.cloneContainer = this.container.cloneNode(false);
        },
        createMessage: function createMessage(cssClass, messageText) {
            var message = document.createElement('p');
            message.classList.add(cssClass);
            message.appendChild(document.createTextNode(messageText));
            this.cloneContainer.appendChild(message);
            return message;
        },
        showMessages: function showMessages() {
            this.container
                .parentNode.replaceChild(this.cloneContainer, this.container);
            this.init();
        },
        clear: function clearMessages() {
            this.container.innerHTML = '';
        }
    };

    var issues = {
        read: function readIssues(featureid) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', config.url.search.featureid(featureid));

            var renderFunction = this.render;
            xhr.onreadystatechange = function onIssuesRead() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        var response = JSON.parse(xhr.response);
                        renderFunction(response.issues);
                    }
                }
            };

            xhr.send();
        },
        display: function displayIssues(featureid) {
            this.read(featureid);
        },
        render: function renderIssues(issues) {
            var element = document.getElementById(config.element.issuelist);

            var list = document.createElement('ul');
            issues.forEach(function createListItem(issue) {
                var item = document.createElement('li');
                // TODO: use template, not just plain string...
                var f = issue.fields;
                item.innerHTML = '<span class="summary">' + f.summary + '</span>'
                + '<span class="description">' + f.description + '</span>'
                + '<span class="date">Created date: ' + f.created + '</span>'
                + '<span class="date">Updated date: ' + f.created + '</span>'
                + '<a href="'+ config.url.base +'/browse/'+ issue.key +'" target="_blank">Link to issue</a>';

                list.appendChild(item);
            });

            element.innerHTML = list.innerHTML;
        }
    };
}());