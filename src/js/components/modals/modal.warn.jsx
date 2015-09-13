var AppStore = require ( '../../stores/app.store.js' );
var AppActions = require( '../../actions/app.actions.js' );
var ApiCalls = require( '../../utils/api.calls.js' );
var StoreMixins = require( '../../mixins/store.mixins.js' );
var bootmodal = require( './bootmodal.js' );


function getModalState(){
    return AppStore.getWarnModalState()
}

var WarnModal = React.createClass({

    mixins: [StoreMixins(getModalState)],

    handleClick: function ( pageById, e ) {
        e.preventDefault();
        if(pageById!=null){
            ApiCalls.deletePage( pageById );
        }
        AppActions.setWarnModal(false);
        bootmodal.Off();
    },

    render: function() {
        var classes = ("modal fade" + ((this.state.isVisible)? " in" : "") );
        return (
            <div className={classes}>
                <div className="modal-dialog modal-sm" id="warn_modal">
                    <div className="modal-content">
                        <h4>Are you sure you want to delete <br/> this page?</h4>
                        <div className="modal-footer">
                            <div className="btn btn-default pull-left" onClick={ this.handleClick.bind(this, null) }>
                                <i className="fa fa-power-off"> Cancel</i>
                            </div>

                        <div className="btn btn-danger pull-right">
                            <i className="fa fa-trash" onClick={ this.handleClick.bind(this, this.state.pageById )}> Delete</i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = WarnModal;
