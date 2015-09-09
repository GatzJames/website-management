window.React = require( 'react' );
var App = require( 'components/app.jsx' );
var ApiCalls = require('./utils/api.calls');

// Get Data from the Server
ApiCalls.getPages();

// Render The Application
React.render( <App />, document.body );
