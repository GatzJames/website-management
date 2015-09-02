import React from 'react';
var Hello = require('./components/hello.jsx');

var World = React.createClass({
    render: function(){
        return(
            <div className="jiberish">
                <Hello />
            </div>
        );
    }
});

React.render(<World />, document.body);
