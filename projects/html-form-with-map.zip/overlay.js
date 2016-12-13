Map.JS = {
    Overlay: {
        el: function element() {
            var container = document.getElementById('overlay');
            var content = container.querySelector('.content');
            return {
                container: container,
                content: content
            };
        },
        show: function showOverlay(content) {
            var el = this.el();
            // el.content.textContent = content;
            el.container.style.visibility = 'visible';
        },
        hide: function hideOverlay() {
            var el = this.el();
            el.container.style.visibility = 'hidden';
            // el.content.textContent = '';
        }
    }
};

    document.addEventListener('DOMContentLoaded', function initOverlay() {
        var container = Map.JS.Overlay.el().container;
        var close = container.querySelector('#close-overlay');

        close.addEventListener('click', function() {
            Map.JS.Overlay.hide();
        });
    });
