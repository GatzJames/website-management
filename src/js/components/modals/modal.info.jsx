var AppStore = require ( '../../../stores/app.store.js' );
var AppActions = require( '../../../actions/app.actions.js' );
var ApiCalls = require( '../../../utils/api.calls.js' );
var StoreMixins = require( '../../../mixins/store.mixins.js' );
//var SwitchButton = require( './switch.button.jsx' );

function getModalState(){
    return AppStore.getModalState()
}

var MainModal = React.createClass({

    mixins: [StoreMixins(getModalState)],
    render: function() {
        return (
            <div />
        );
    }
});

module.exports = MainModal;
