var AppStore = require ( '../../stores/app.store.js' );
var TableRow = require( './table.row.jsx' );
var StoreMixins = require( '../../mixins/store.mixins.js' );
var chunk = require ( 'lodash.chunk' );
// Get Pages from App Store
function getPagesState(){
    return {
        pages: chunk( AppStore.getPages(), 10 )
    }
}

// PagesTable Component
var PagesTable = React.createClass({

    mixins: [StoreMixins(getPagesState)],

    render: function(){
        var data = this.state.pages.map( function( page ){
            return ( <TableRow page={page} key={page.id}/> );
        });

        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-sm-1">Id</div>
                            <div className="col-sm-5">Title</div>
                            <div className="col-sm-2">Type</div>
                            <div className="col-sm-3">Published</div>
                            <div className="col-sm-1">Status</div>
                        </div>
                    </div>
                    <div className="panel-body">
                        {data}
                    </div>
                </div>
            );
    }
});
module.exports = PagesTable;
