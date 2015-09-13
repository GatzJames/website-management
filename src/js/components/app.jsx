var Header = require( './header/header.jsx' );
var Table  = require( './container/table/table.jsx' );
var Pagination = require( './container/pagination.jsx' );
var MainModal = require( './modals/mainmodal/modal.main.jsx' );
var InfoModal = require( './modals/modal.info.jsx' );
var WarnModal = require( './modals/modal.warn.jsx' );

var App = React.createClass({

    render: function() {
        return (
            <div className="app-container">
                <Header />
                <Table />
                <Pagination />
                <MainModal />
                <InfoModal />
                <WarnModal />
            </div>
        );
    }

});

module.exports = App;
