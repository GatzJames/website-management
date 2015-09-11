var Button = React.createClass({

    render: function() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                <i className={this.props.iconName}></i>
                {this.props.name}
            </div>
        );
    }

});

module.exports = Button;
