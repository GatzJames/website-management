var ModalHeader = React.createClass({

    render: function() {
        return (
            <div className="md-header">
                <div className="close" onClick={this.props.onClick}>
                    <i className="fa fa-times"></i>
                </div>
                <h3><i className={this.props.className}></i>{this.props.headerText}</h3>
            </div>
        );
    }

});

module.exports = ModalHeader;
