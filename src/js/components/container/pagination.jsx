var AppStore = require( '../../stores/app.store' )
var StoreMixins = require( '../../mixins/store.mixins' );
var AppActions = require( '../../actions/app.actions' );

function getPaginationState() {
    return AppStore.getPaginationState();
};

var Pagination = React.createClass({

    mixins: [ StoreMixins( getPaginationState ) ],

    handleClick: function ( pageNum, e ) {
            e.preventDefault();
            AppActions.activePage( pageNum )
    },

    render: function() {
        var pageButtons = [];
        for ( var i = 0; i < this.state.pageNumber; i++){
            pageButtons.push(
                <li key={i}
                    className={ ( this.state.pageActive === i ) ? 'active' : null }
                >
                <a href="#" onClick={this.handleClick.bind(this, i)}>{i+1}</a>
                </li> )
        };
        return (
            <ul className="pagination">
                {pageButtons}
            </ul>
        );
    }

});

module.exports = Pagination;
