var AppStore = require ( '../../../stores/app.store.js' );
var AppActions = require( '../../../actions/app.actions.js' );
var ApiCalls = require( '../../../utils/api.calls.js' );
var StoreMixins = require( '../../../mixins/store.mixins.js' );
//var SwitchButton = require( './switch.button.jsx' );

function getModalState(){
    return AppStore.getModalState()
}

var MainModal = React.createClass({

    mixins: [ StoreMixins( getModalState ) ] ,
/*
    handleSubmit: function(e) {
           e.preventDefault();
           var author = React.findDOMNode(this.refs.author).value.trim();
           var text = React.findDOMNode(this.refs.text).value.trim();
           if (!text || !author) {
             return;
           }
           // TODO: send request to the server
           React.findDOMNode(this.refs.author).value = '';
           React.findDOMNode(this.refs.text).value = '';
           return;

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
*/
    render: function (){
/*
        console.log("ACTIVE:", this.state.data.isActive); // Test
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
        }*/
        return(
            <div className={classes} style={stylez}>
                <div className="modal-dialog">
                    <div className="modal-content">
                            <ModalHeader />
                        <div className="modal-body">
                            <Form />
                        </div>
                        <div className="modal-footer">
                            <Button className="btn btn-default" iconName="fa fa-logout" name="Cancel" />
                            <Button className="btn btn-default" iconName="" name="Save"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = MainModal;
