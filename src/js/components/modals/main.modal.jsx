var AppStore = require ( '../../stores/app.store.js' );
var AppActions = require( '../../actions/app.actions.js' );
var ApiCalls = require( '../../utils/api.calls.js' );
//var SwitchButton = require( './switch.button.jsx' );

function getModalState(){
    return AppStore.getModalState()
}

var MainModal = React.createClass({

    getInitialState: function (){
        return getModalState();
    },

    componentWillMount: function () {
        AppStore.addChangeListener( this._onChange )
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState( getModalState() );
    },

    handleInputChange: function(){
        this.setState({
            data: {
                title: this.refs.title.getDOMNode().value,
                type: this.refs.type.getDOMNode().value,
                description: this.refs.description.getDOMNode().value,
                isActive: this.state.data.isActive,
                id: this.state.data.id
            }
        })
    },

    closeModal: function(){
        AppActions.isModalVisible(false);
    },

    savePage: function () {
        if ( this.state.data.title === "") {
            this.setState({ validTitle: false });
        }
        else{
            if ( typeof this.state.data.id === "undefined" ) {
                ApiCalls.addPage(this.state.data)
                console.log("Add Page");
            }
            else {
               ApiCalls.editPage(this.state.data)
                console.log("Edit Page");
            }
            this.closeModal();
        }
    },
    handleLeftClick: function(){
        return this.setState({ data: {
            title: this.state.data.title,
            type: this.state.data.type,
            description: this.state.data.description,
            isActive: true,
            id: this.state.data.id
        }  })
    },

    handleRightClick: function (){
        return this.setState({ data: {
            title: this.state.data.title,
            type: this.state.data.type,
            description: this.state.data.description,
            isActive: false,
            id: this.state.data.id
            }
        })
    },

    render: function (){
        console.log("ACTIVE:", this.state.data.isActive);
        var headerClass, headerText;
        if ( typeof this.state.data.id === "undefined" ){
            headerClass = "fa fa-plus";
            headerText = " Add Page ";
        }
        else {
           headerClass = "fa fa-pencil-square-o";
           headerText = " Edit Page "
        }
        console.log(this.state.data)
        var classes = (this.state.isVisible) ? "modal fade in" : "modal fade" ;
        var stylez = {
            display: (this.state.isVisible) ? "block" : "none"
        };
        var titleClass = (this.state.validTitle)? "" : " has-error";
        var switchStyle = {
            left: (this.state.data.isActive) ? "0" : "50%"
        }
        return(
            <div className={classes} style={stylez}>
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
                                    <input ref="title" value={this.state.data.title} onChange={this.handleInputChange} className="form-control" id="form-title"  maxLength="50" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-type">Type:</label>
                                    <select ref="type" className="form-control" id="form-type" onChange={this.handleInputChange}>
                                    <option>Menu</option>
                                    <option>Events</option>
                                    <option>Content</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-description">Description:</label>
                                    <textarea ref="description" value={this.state.data.description} onChange={this.handleInputChange} className="form-control noresize" id="form-description" maxLength="200" rows="4"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-status">Status:</label>
                                    <div className="switch-button">
                                        <span className="active" style={switchStyle}/>
                                        <div className="switch-button-case left" onClick={this.handleLeftClick}><i className="fa fa-link"></i> Online</div>
                                        <div className="switch-button-case right" onClick={this.handleRightClick}>Offline <i className="fa fa-chain-broken"></i></div>
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
