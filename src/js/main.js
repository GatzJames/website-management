window.React = require( 'react' );
var Header = require( './components/header/header.jsx' );
var PagesTable = require( './components/container/pages.table.jsx' );
var MainModal = require( './components/modals/main.modal.jsx' );
//var ConfirmModal = require ( './components/modals/confirm.modal.jsx' );
var ApiCalls = require('./utils/api.calls');

ApiCalls.getPages();

var App = React.createClass({
    render: function(){
        return(
            <div className="container">
                <Header />
                <PagesTable />
                <MainModal />
            </div>
        );
    }
});

React.render( <App />, document.body );
