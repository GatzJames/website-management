var AppActions = require( '../../actions/app.actions.js' );

var PanelConfirm = React.createClass({
    handleClick:function(){
        AppActions.deletePage(this.props.index);
    },
    render:function(){
      return (
          <div className="modal fade">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p>Are you sure you want to delete
                                <br/>this page?
                            </p>
                        </div>
                        <div className="modal-body">
                            <div className="btn btn-default"><i className="fa fa-times"></i>Cancel</div>
                            <div className="btn btn-success" onClick={this.handleClick}><i className="fa fa-check"></i>Confirm</div>
                        </div>
                    </div>
                </div>
         </div>
     )
    }
  });
module.exports = PanelConfirm;
