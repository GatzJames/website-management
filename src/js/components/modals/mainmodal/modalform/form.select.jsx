var FormSelect = React.createClass({

    render: function() {
        var options = this.props.options.forEach( function( option ) {
            return <option key={option} value={option}> {option} </option>
        });
        return (
            <div className="form-group">
                <label htmlFor={this.props.inputId}>{this.props.title}</label>
                <select
                    value={this.props.options[0]}
                    id={this.props.inputId}
                    onChange={this.props.onChange}
                >
                    {options}
                </select>
            </div>
        );
    }

});

module.exports = FormSelect;
