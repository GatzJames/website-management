var FormInput = requre( './form.group.jsx' );
var FormSelect = requre( './form.select.jsx' );
var FormTextArea = requre( './form.textarea.jsx' );
var FormSwitchButton = requre( './switch.button.jsx' );

var Form = React.createClass({

    render: function (){
    <form>
        <FormInput type="title" data={ this.props.data} />
        <FormSelect type="type" data={this.props.data.type}/>
        <FormTextArea type="description" data={this.props.data.description} />
        <FormSwitchButton type="online" data={this.props.data.online}/>
    </form>
    }
});

module.exports = Form;
