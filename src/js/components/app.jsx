var Header = require( './header/header.jsx' );
var Table  = require( './container/table/table.jsx' );
var Pagination = require( './container/pagination.jsx' );
var MainModal = require( './modals/mainmodal/modal.main.jsx' );
var WarnModal = require( './modals/modal.info.jsx' );
var InfoModal = require( './modals/modal.warn.jsx' );

var App = React.createClass({

    render: function() {
        return (
            <div className="container">
                <Header />
                <Table />
                <Pagination />
                <MainModal />
                <WarnModal />
                <InfoModal />
            </div>
        );
    }

});

module.exports = App;
