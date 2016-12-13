CustomMetricsHeatMap = {
    dataPoints: [],
    dataSetId: '1',
    fieldName: "customfield_10102", // customfield_10100 - votes, customfield_10101 - severity, customfield_10102 - fix time

    originalHeatMap: null,
    originalHeatMapLayer: null,

    customHeatMap: null,
    customHeatMapLayer: null,

    loadData: function () {
        $.ajax({
            async: false,
            url: "data/data.json",
            type: 'GET',
            success: function (data) {
                if (!data) {
                    console.warn("No data was loaded!");
                    return;
                }

                //CustomMetricsHeatMap.dataPoints = data;   // display all data

                // display only subset of data
                for (var i = 100; i < 400; i++) {
                    CustomMetricsHeatMap.dataPoints.push(data[i]);
                }
            },
            error: function (error) {
                alert("Error: " + JSON.stringify(error));
            }
        });
    },

    drawCustomHeatMap: function () {
        CustomMetricsHeatMap.customHeatMap = L.map('heat-map-custom').setView([48.147100, 17.105650], 13);

        var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(CustomMetricsHeatMap.customHeatMap);

        options = {minOpacity: 0.2};
        CustomMetricsHeatMap.customHeatMapLayer = L.heatLayer(CustomMetricsHeatMap.parseLocationsFromData(true), options)
            .addTo(CustomMetricsHeatMap.customHeatMap);
    },


    drawOriginalHeatMap: function () {
        CustomMetricsHeatMap.originalHeatMap = L.map('heat-map-original').setView([48.147100, 17.105650], 13);

        var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(CustomMetricsHeatMap.originalHeatMap);

        CustomMetricsHeatMap.originalHeatMapLayer = L.heatLayer(CustomMetricsHeatMap.parseLocationsFromData(false))
            .addTo(CustomMetricsHeatMap.originalHeatMap);
    },

    parseLocationsFromData: function (useWeights) {
        var locations = [];
        var maxValue;
        var minValue;

        if (useWeights) {
            maxValue = CustomMetricsHeatMap.getMaxFromFields(CustomMetricsHeatMap.fieldName);
            minValue = CustomMetricsHeatMap.getMinFromFields(CustomMetricsHeatMap.fieldName); // TODO what if min is 0
        }

        for (var i = 0; i < CustomMetricsHeatMap.dataPoints.length; i++) {
            var locString = CustomMetricsHeatMap.dataPoints[i].fields.defaultLocationCf.split(" ");
            var locArray = [];
            locArray.push(parseFloat(locString[0]));
            locArray.push(parseFloat(locString[1]));

            if (useWeights) {
                locArray.push(CustomMetricsHeatMap
                    .getNormalizedHeatPoint(CustomMetricsHeatMap.dataPoints[i].fields[CustomMetricsHeatMap.fieldName].value, maxValue, minValue))
            }

            locations.push(locArray);
        }

        return locations;
    },

    getMaxFromFields: function (fieldName) {
        var maxValue = -1;

        for (var i = 0; i < CustomMetricsHeatMap.dataPoints.length; i++) {
            var currentValue = CustomMetricsHeatMap.dataPoints[i].fields[fieldName].value;
            if (maxValue < currentValue) {
                maxValue = currentValue
            }
        }

        return maxValue;
    },

    getMinFromFields: function (fieldName) {
        var minValue = 10000;

        for (var i = 0; i < CustomMetricsHeatMap.dataPoints.length; i++) {
            var currentValue = CustomMetricsHeatMap.dataPoints[i].fields[fieldName].value;
            if (minValue > currentValue) {
                minValue = currentValue
            }
        }

        return minValue;

    },

    getNormalizedHeatPoint: function (currentValue, maxValue, minValue) {
        return (currentValue - minValue) / (maxValue - minValue);
    }
};

// TODO clean up script and update to generic

$(document).ready(function () {
    CustomMetricsHeatMap.loadData();

    CustomMetricsHeatMap.drawOriginalHeatMap();
    CustomMetricsHeatMap.drawCustomHeatMap();
});


