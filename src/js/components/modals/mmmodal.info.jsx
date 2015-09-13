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
        var classes = "md-modal md-info" + (( this.state.isVisible ) ? ' md-show' : '') ;
        return (
            <div className="infomodal">
                <div className={classes} id="modal-1">
                    <div className="md-content">
                    <div className="btn btn-default close">
                    <i className="fa fa-close"></i>
                    </div>
                    <h4 className="md-title" id="myModalLabel">
                    <i className="fa fa-info-circle"></i> Website Management</h4>
                    <p>Here you can manage your website's pages.</p>
                <div className="md-body">

                    <h4>How to:</h4>
                    <h5>Add a page</h5>
                    <p>To add a new page press the <i className="fa fa-plus"></i> button and provide the page's Information.
                    The title of the page is required, and if you do not provide a status, offline will
                    be registered.
                    </p>
                    <h5>Edit an existing page</h5>
                    <p>To edit an existing page press the
                    <div className="btn btn-default">
                    <i className="fa fa-pencil-square-o"></i> Edit
                    </div> and edit your pages.
                    </p>
                    <h5>Delete a page</h5>
                    <p>To delete a page just press the
                    <div className="btn btn-danger">
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
                    <div className="md-footer">
                        <div className="btn btn-default pull-right" onClick={this.handleClick}>
                            <i className="fa fa-power-off"></i> Close
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
});

module.exports = InfoModal;
