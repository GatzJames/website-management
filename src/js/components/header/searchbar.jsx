var SearchBar = React.createClass({
    
    onChange: function( e ) {
      this.props.onChange( e.target.value );
    },

    render: function() {
        return (
            <div class="input-group">
                <input
                    id={this.props.id}
                    type="search"
                    className="form-control"
                    value={this.props.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }

});

module.exports = SearchBar;
