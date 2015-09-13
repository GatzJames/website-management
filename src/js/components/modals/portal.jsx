var Portal = React.createClass({

  render: function () {
    return null;
  },

  portalElement: null,
  componentDidMount: function () {

    var p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      var p = document.createElement('div');
      p.id = this.props.portalId;
      p.className = this.props.className;
      document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  },
  componentWillUnmount: function () {
    document.body.removeChild(this.portalElement);
  },
  componentDidUpdate: function () {
    React.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
  }
});

module.exports = Portal;
