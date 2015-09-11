var AppDispatcher = require('../dispatcher/app.dispatcher');
var AppConstants = require('../constants/app.constants');
var merge = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

//----- Initial data -----//
var _pages = [], _filteredPages = [],
    ModalState = {
        _isModalVisible: false,
        _dataToShow: {},
        setModalState: function (vis, data){
            this._isModalVisible = vis,
            this._dataToShow = data
        }
    };

//----- Store Functionality -----//

// Load the pages
function _loadPages(pages_data){
    console.log("Loaded Pages: ", pages_data); // Test
    _pages = pages_data;
    _filteredPages = _pages;
};

// Filter the pages
function _filterPages( filterValue ){
    var nr = new RegExp(filterValue, 'i');
    _filteredPages = _pages.filter( function(page){
            var x = _.map(page);
            var y = false;
            for (var i=0; i<x.length; i++){
                if(x[i].match(nr)){
                    y = true;
                }
            }
            console.log("MAPPED", y);
            return y;
    })
    console.log("PAGES_FILTERED", _filteredPages);
};


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
// Search Through Pages

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
      return _filteredPages;
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

        case AppConstants.SEARCH_PAGES:
            _filterPages(action.input)
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
