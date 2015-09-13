var FormGroup = React.createClass({

    render: function() {
        return (
            <div className={ "form-group" }>
                <label htmlFor={ this.props.id }>Title:</label>
                <input
                    ref={ this.props.title }
                    defaultValue={ this.props.title }
                    onChange={this.props.handleInputChange}
                    className="form-control"
                    id={this.props.id}
                    maxLength="this.props.maxLength"
                />
            </div>
        );
    }

});

module.exports = FormGroup;
