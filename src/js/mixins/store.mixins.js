var AppStore = require ( '../stores/app.store' );

var StoreMixins = function (cb) {
    return {
        getInitialState:function(){
            return cb();
        },
        componentWillMount:function(){
            AppStore.addChangeListener( this._onChange )
        },
        componentDidMount:function(){
            this.setState( cb() )
        },
        componentWillUnmount:function(){
            AppStore.removeChangeListener( this._onChange )
        },
        _onChange:function(){
            this.setState( cb() )
        }
    }
}

module.exports = StoreMixins;
