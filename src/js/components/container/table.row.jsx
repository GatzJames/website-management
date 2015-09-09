var Delete = require( './pages.delete.jsx' );
var Edit = require( './pages.edit.jsx' );

var TableRow = React.createClass({

    render: function () {
        var statusClass = ( this.props.page.isActive ) ? "fa fa-link" : "fa fa-chain-broken" ;
        return (
            <div className="row data-wrapper">
                <div className="col-xs-12 first-data-row">
                    <div className="col-xs-12 col-sm-1" data-type="Id">{this.props.page.id}</div>
                    <div className="col-xs-12 col-sm-5" data-type="Title">{this.props.page.title}</div>
                    <div className="col-xs-12 col-sm-2" data-type="Type">{this.props.page.type}</div>
                    <div className="col-xs-12 col-sm-3" data-type="Published">{this.props.page.publishedOn}</div>
                    <div className="col-xs-12 col-sm-1" data-type="Status"><i className={statusClass}></i></div>
                </div>
                <div className="col-xs-12 second-data-row">
                    <div className="col-xs-12 col-sm-8" data-type="Description">{this.props.page.description}</div>
                    <div className="col-xs-12 col-sm-4 button-holder">
                        <Delete index={this.props.page.id} />
                        <Edit index={this.props.page} />
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = TableRow;
