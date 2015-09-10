var AddButton = require( './add.button.jsx' );
var InfoButton = require( './info.button.jsx' );
var SearchBar = require( './searchbar.jsx' )

var Header = React.createClass({

    render: function(){
        return(
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-left">
                        <img className="navbar-brand" src="../../../img/logo.png"/>
                        <h3>Website Management</h3>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <SearchBar />
                            </li>
                            <li>
                                <AddButton />
                            </li>
                            <li>
                                <InfoButton />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
});

module.exports = Header;
