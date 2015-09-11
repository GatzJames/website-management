var InfoButton = React.createClass({
    handleClick: function(){
        AppActions.InfoModalShow(true);
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
