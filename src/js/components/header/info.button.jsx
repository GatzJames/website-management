var AppActions = require( '../../actions/app.actions' );
var bootmodal = require( '../modals/bootmodal.js' );

var InfoButton = React.createClass({
    handleClick: function () {
        bootmodal.On();
        AppActions.setInfoModal(true);

    },
    render: function(){
        return (
            <div className="btn navbar-btn" onClick={this.handleClick}>
                <i className="fa fa-question"></i>
            </div>
        );
    }

});

module.exports = InfoButton;
