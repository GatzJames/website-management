var AppStore = require ( '../../../stores/app.store.js' );
var AppActions = require( '../../../actions/app.actions.js' );
var ApiCalls = require( '../../../utils/api.calls.js' );
var StoreMixins = require( '../../../mixins/store.mixins.js' );
//var SwitchButton = require( './switch.button.jsx' );

function getModalState(){
    return AppStore.getModalState()
}

var WarnModal = React.createClass({

    mixins: [StoreMixins(getModalState)],

    handleClick: function ( e ) {
            if( e ){
                ApiCalls.deletePage( this.state.pageById )
            }
            else {
                AppActions.setWarnModal( false );
            }
    },

    render: function() {
        return (
            <div className="modal" id="warn_modal">
                <div className="modal-dialog">
                    <h4>Are you sure you want to delete <br/> this page?</h4>
                </div>
                <div className="modal-footer">
                    <div className="btn btn-default" onClick={this.handleClick(true)}>
                        <i className="fa fa-power-off">Cancel</i>
                    </div>
                </div>
                <div className="btn btn-warn">
                    <i className="fa fa-trash" onClick={this.handleClick(false)}>Delete</i>
                </div>
            </div>
        );
    }

});

module.exports = WarnModal;
