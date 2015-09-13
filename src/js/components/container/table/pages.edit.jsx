var AppActions = require( '../../../actions/app.actions.js' );
var bootmodal = require( '../../modals/bootmodal.js' );

var EditButton = React.createClass({
    handleClick:function(){
      AppActions.setMainModal(true, this.props.index);
      bootmodal.On();
    },
    render:function(){
      return (
            <div className="btn btn-default" onClick={this.handleClick}>
                <i className="fa fa-pencil-square-o"></i> Edit
            </div>
         )
    }
  });
module.exports = EditButton;
