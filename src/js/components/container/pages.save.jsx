var AppActions = require( '../../actions/app.actions.js' );

var SaveButton = React.createClass({
    render: function (){
        <div className="btn btn-default" onClick={this.handleClick}>
            <i className="fa fa-floppy-o"></i> Save
        </div>
    }
});

module.exports = SaveButton;
