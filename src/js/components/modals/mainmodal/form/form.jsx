var Form = React.createClass({
    
    render: function (){
    <form>
        <FormInput type="title" data={this.props.data.} />
        <FormSelect type="type" data={this.props.data.type}/>
        <FormInput type="description" data={this.props.data.description} />
        <FormButton type="online" data={this.props.data.online}/>
    </form>
    }
});

module.exports = Form;
