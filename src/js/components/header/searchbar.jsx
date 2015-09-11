var AppActions = require( '../../actions/app.actions' );

var SearchBar = React.createClass({

    onChange: function( e ) {
      AppActions.searchPages( e.target.value );
    },

    render: function() {
        return (
                <div className="input-group" id="search_bar">
                    <div className="input-container">
                        <input
                            id="search_bar"
                            type="text"
                            placeholder="Search"
                            className="form-control"
                            onChange={this.onChange}
                        />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
        );
    }

});

module.exports = SearchBar;
