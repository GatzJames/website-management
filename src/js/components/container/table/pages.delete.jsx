//var WarnModal = require('../modals/warn.modal.jsx');
var ApiCalls = require( '../../utils/api.calls.js' );

var Increase = React.createClass({
    handleClick:function(){
      ApiCalls.deletePage(this.props.index);
    },
    render:function(){
      return (
            <div className="btn btn-danger" onClick={this.handleClick}>
                <i className="fa fa-trash-o"></i> Delete
            </div>
        )
    }
  });
module.exports = Increase;
