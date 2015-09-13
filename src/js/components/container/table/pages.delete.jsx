var AppActions = require( '../../../actions/app.actions' );
var bootmodal = require( '../../modals/bootmodal.js' );

var Delete = React.createClass({
    handleClick:function(){
      AppActions.setWarnModal( true, this.props.index );
      bootmodal.On();
    },
    render:function(){
      return (
            <div className="btn btn-danger" onClick={this.handleClick}>
                <i className="fa fa-trash-o"></i> Delete
            </div>
        )
    }
  });
module.exports = Delete;
