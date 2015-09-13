var AppActions = require( '../../actions/app.actions.js' );
var bootmodal = require( '../modals/bootmodal' );

var AddButton = React.createClass({
    handleClick: function(){
        AppActions.setMainModal(true, {});
        bootmodal.On();
    },
    render: function(){
        return (
            <div className="btn navbar-btn" onClick={this.handleClick}>
                <i className="fa fa-plus"></i>
            </div>
        );
    }

});

module.exports = AddButton;
