var AppStore = require ( '../../../stores/app.store.js' );
var AppActions = require( '../../../actions/app.actions.js' );
var ApiCalls = require( '../../../utils/api.calls.js' );
var StoreMixins = require( '../../../mixins/store.mixins.js' );
var validate = require( '../../../utils/validate.data' )
var bootmodal = require( '../bootmodal' );

function getModalState(){
    return AppStore.getModalState()
}

var MainModal = React.createClass({

    mixins: [StoreMixins(getModalState)],

    handleInputChange: function(inputType, e){
        e.preventDefault();
        var newdata=this.state.data;
        newdata[inputType] = e.target.value;
        AppActions.setMainModal(true, newdata)
    },

    closeModal: function(){
        AppActions.setMainModal(false ,{});
        bootmodal.Off();
    },

    savePage: function () {
        if ( validate.isValidTitle(this.state.data.title)) {

            if ( this.state.data.id == null ) {
                ApiCalls.addPage(this.state.data)
            }
            else {
                ApiCalls.editPage(this.state.data)
            }
            this.closeModal();
        }
    },
    handleClick: function( side, e){
        e.preventDefault();
        var newdata = this.state.data;
        if ( side==="left" ){
            newdata['isActive'] = 'online';
        }
        else{
            newdata['isActive'] = 'offline';
        }
        AppActions.setMainModal(true, newdata);
    },

    render: function (){
        var headerClass, headerText;
        if ( typeof this.state.data.id === "undefined" ){
            headerClass = "fa fa-plus";
            headerText = " Add Page ";
        }
        else {
           headerClass = "fa fa-pencil-square-o";
           headerText = " Edit Page "
        }
        var classes = (this.state.isVisible) ? "modal fade in" : "modal fade" ;
        var titleClass = (validate.isValidTitle(this.state.data.title))? "" : " has-error";
        var switchStyle = {
            left: (this.state.data.isActive=== 'online') ? "0" : "50%"
        }
        return(
            <div className={classes}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="close" onClick={this.closeModal}>
                                <i className="fa fa-times"></i>
                            </div>
                            <h3><i className={headerClass}></i>{headerText}</h3>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className={"form-group" + titleClass}>
                                    <label htmlFor="form-title">Title:</label>
                                    <input
                                        ref="title"
                                        value={this.state.data.title}
                                        onChange={this.handleInputChange.bind(this, 'title')}
                                        className="form-control"
                                        id="form-title"
                                        maxLength="50"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-type">Type:</label>
                                    <select
                                        ref="type"
                                        className="form-control"
                                        value={this.state.data.type || 'Menu'}
                                        id="form-type"
                                        onChange={this.handleInputChange.bind(this, 'type')}
                                    >
                                        <option>Menu</option>
                                        <option>Events</option>
                                        <option>Content</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-description">Description:</label>
                                    <textarea
                                        ref="description"
                                        value={this.state.data.description || ''}
                                        onChange={this.handleInputChange.bind(this, 'description')}
                                        className="form-control noresize"
                                        id="form-description"
                                        rows="3"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-status">Status:</label>
                                    <div className="switch-button" id="form-status">
                                        <span className="active" style={switchStyle}/>
                                        <div className="switch-button-case left" onClick={this.handleClick.bind(this, 'left')}><i className="fa fa-link"></i> Online</div>
                                        <div className="switch-button-case right" onClick={this.handleClick.bind(this, 'right')}>Offline <i className="fa fa-chain-broken"></i></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <div className="btn btn-default" onClick={this.closeModal}>
                                <i className="fa fa-power-off"></i> Cancel
                            </div>
                            <div className="btn btn-default" onClick={this.savePage}>
                                <i className="fa fa-floppy-o"></i> Save
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = MainModal;
