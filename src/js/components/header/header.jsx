var AddButton = require( './add.button.jsx' );
var InfoButton = require( './info.button.jsx' );
var SearchBar = require( './searchbar.jsx' )

var Header = React.createClass({

    render: function(){
        return(
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className="pull-left">
                            <img className="navbar-brand" src="../../../img/logo.png"/>
                            <h3 className="navbar-text">Website Management</h3>
                        </div>
                            <SearchBar />
                        <div className="pull-right">
                            <AddButton />
                            <InfoButton />
                        </div>

                    </div>


                </nav>
            </header>
        );
    }
});

module.exports = Header;
