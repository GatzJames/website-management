var AppStore = require ( '../../stores/app.store.js' );
var TableRow = require( './table.row.jsx' );

// Get Pages from App Store
function getState(){
    return {
        pages: AppStore.getPages()
    }
}

// PagesTable Component
var PagesTable = React.createClass({

    getInitialState: function (){
            return getState();
    },

    componentWillMount: function () {
        AppStore.addChangeListener( this._onChange )
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState( getState() );
    },

    render: function(){
        //
        var data = this.state.pages.map( function( page ){
            //var statusClass = ( page.isActive ) ? "fa fa-link" : "fa fa-chain-broken" ;
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
