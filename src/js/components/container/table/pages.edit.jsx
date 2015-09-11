var AppActions = require( '../../../actions/app.actions.js' );

var EditButton = React.createClass({
    handleClick:function(){
      AppActions.isModalVisible(true, this.props.index);
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
