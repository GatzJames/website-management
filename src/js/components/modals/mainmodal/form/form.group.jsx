var FormGroup = React.createClass({

    render: function() {
        return (
            <div className={ "form-group" + this.props.title }>
                <label htmlFor={ this.props.title }>Title:</label>
                <input ref={ this.props.title } defaultValue={ this.state.data.title } onChange={this.handleInputChange} className="form-control" id={this.props.title}  maxLength="50"/>
            </div>
        );
    }

});

module.exports = FormGroup;
