var Dispatcher = require( 'flux' ).Dispatcher;

// Create new instance of Dispatcher
var AppDispatcher = new Dispatcher();

// Handle Dispatch requests
AppDispatcher.handleAction = function(action){
    console.log('DISPATCHED ACTION:', action); // Test
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }

module.exports = AppDispatcher;
