var AddButton = require( './add.button.jsx' );
var InfoButton = require( './info.button.jsx' );

var Header = React.createClass({
    render: function(){
        return(
            //Header goes here
            <header>
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <img className="navbar-brand" src="../../../img/logo.png"/>
                    <h3>Website Management</h3>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><AddButton /></li>
                        <li><InfoButton /></li>
                    </ul>
                </div>
            </nav>
            </header>
        );
    }
});

module.exports = Header;
