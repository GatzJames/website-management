var AppStore = require ( '../../stores/app.store.js' );
var AppActions = require( '../../actions/app.actions.js' );
var StoreMixins = require( '../../mixins/store.mixins.js' );
var bootmodal = require( './bootmodal.js' );

function getModalState(){
    return {isVisible : AppStore.getInfoModalState()} ;
};

var InfoModal = React.createClass({

    mixins: [StoreMixins(getModalState)],

    handleClick: function () {
        AppActions.setInfoModal( false );
        bootmodal.Off();
    },

    render: function() {
        var classes = "modal fade" + (( this.state.isVisible ) ? ' in' : '') ;
        return (
            <div className={classes}>
                <div className="modal-dialog" id="modal-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="btn close" onClick={this.handleClick}>
                            <i className="fa fa-close"></i>
                            </div>
                            <h4>
                                <i className="fa fa-info-circle"></i> Website Management</h4>
                        </div>
                        <div className="modal-body">
                            <p>Here you can manage your website's pages.</p>
                            <h4>How to:</h4>
                            <h5>Add a page</h5>
                            <p>To add a new page press the <i className="fa fa-plus"></i>
                             button and provide the page's Information.
                            The title of the page is required, and if you do not provide a status, offline will
                            be registered.
                            </p>
                            <h5>Edit an existing page</h5>
                            <p>To edit an existing page press the
                            <div className="btn btn-default btn-sm">
                                <i className="fa fa-pencil-square-o"></i> Edit
                            </div> and edit your pages.
                            </p>
                            <h5>Delete a page</h5>
                            <p>To delete a page just press the
                            <div className="btn btn-danger btn-sm">
                                <i className="fa fa-trash-o"></i> Delete
                            </div> button.
                            <br/>
                            Notice that always a dialog will appear to ask for your confirmation.
                            </p>
                            <h5>Search through your pages</h5>
                            <p>Simply put your keyword inside the search bar. You can type anything that your pages contain.
                            Id, title, description, date, type (online/offline).
                            </p>
                        </div>
                        <div className="modal-footer">
                            <div className="btn btn-default pull-right" onClick={this.handleClick}>
                                <i className="fa fa-power-off"></i>Close
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = InfoModal;
