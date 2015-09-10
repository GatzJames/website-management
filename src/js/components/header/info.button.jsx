var InfoButton = React.createClass({
    handleClick: function(){
        AppActions.InfoModalShow(true);
    },
    render: function(){
        return (
            <div className="btn btn-primary" onClick={this.handleClick}>
                <i className="fa fa-question"></i>
            </div>
        );
    }

});

module.exports = InfoButton;
