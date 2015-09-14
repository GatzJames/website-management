var backdrop = document.createElement('div');

module.exports = {

    On: function () {
        document.body.setAttribute('class', 'modal-open');
        document.body.appendChild(backdrop);
        backdrop.setAttribute('class', 'modal-backdrop fade in');
    },

    Off: function () {
        document.body.removeAttribute('class');
        backdrop.setAttribute('class', 'modal-backdrop fade');
        document.body.removeChild(backdrop);
    }

};
