var AppDispatcher = require('../dispatcher/app.dispatcher');
var AppConstants = require('../constants/app.constants');
var merge = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

//----- Initial data -----//
var _pages = [],
    ModalState = {
        _isModalVisible: false,
        _dataToShow: {},
        _validTitle: true,
        setModalState: function (vis, data){
            this._isModalVisible = vis,
            this._dataToShow = data
        }
    };

function _loadPages(pages_data){

    console.log("Loaded Pages: ", pages_data); // Test
    _pages = pages_data;
};

//----- Store Functionality -----//
// Add Page
function _addPage( page ){
    _pages.push( page );
};
// Delete Page
function _deletePage( id ){
    _pages.forEach( function( page, index ){
        if( page.id===id ){
            _pages.splice( index,1 )
        }
    })
};
// Edit existing Page
function _editPage( newpage ){
    _pages.forEach( function( page, index ){
        if(page.id === newpage.id){
            _pages.splice( index, 1, newpage );
        }
    });
};
// Open/Close - Edit/Add modal
function _setModal( isVisible, dataToShow ){
    if( isVisible ){
        ModalState.setModalState( true, dataToShow )
    }
    else {
        ModalState.setModalState( false, {} )
    }
};

// *** App Store *** //
var AppStore = merge( EventEmitter.prototype, {
// Emit Changes and add/remove Change Listeners
  emitChange:function(){
    this.emit( "CHANGE_EVENT" )
  },

  addChangeListener:function(callback){
    this.on( "CHANGE_EVENT", callback )
  },

  removeChangeListener:function(callback){
    this.removeListener( "CHANGE_EVENT", callback )
  },
// Store Functionality
  getPages:function(){
      return _pages;
  },
  getModalState: function(){
    return {
        data: ModalState._dataToShow,
        isVisible: ModalState._isModalVisible,
        validTitle: ModalState._validTitle
        };
  },
  // Register the Dispatcher
  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // The action from Dispatcher's HandleAction
    switch(action.actionType){

        case AppConstants.LOAD_PAGES:
            _loadPages(action.pages);
        break;

        case AppConstants.ADD_PAGE:
            _addPage(action.page);
        break;

        case AppConstants.DELETE_PAGE:
            _deletePage(action.id);
        break;

        case AppConstants.EDIT_PAGE:
            _editPage(action.page);
        break;

        case AppConstants.MODAL_VISIBLE:
            _setModal(action.isVisible, action.id);
        }
        AppStore.emitChange();

        return true; //Promises Requirement
  })
})

module.exports = AppStore;
