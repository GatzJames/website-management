var AddButton = React.createClass({
    handleClick: function(){
            InfoModal.open();
    },
    render: function(){
        return (
            <div className="btn btn-primary" onClick={this.handleClick}>
                <i className="fa fa-question"></i>
            </div>
        );
    }

});

module.exports = AddButton;
