var AppDispatcher = require('../dispatcher/app.dispatcher');
var AppConstants = require('../constants/app.constants');
var merge = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

//----- Initial data -----//
var _pages = [], _filteredPages = [[]], _pageNumber=0, _pageActive=0, _InfoModal = false;
var ModalState = {
        _isModalVisible: false,
        _dataToShow: {},
        _setModalState: function (vis, data){
            this._isModalVisible = vis,
            this._dataToShow = data
        }
    };

var WarnModalState = {
    _isModalVisible: false,
    _pageById: null,
    _setModalState: function ( vis, id ) {
        this._isModalVisible = vis;
        this._pageById = id;
    }
};
//----- Store Functionality -----//

function reload() {
    _filteredPages = _.chunk(_pages , 5);
    _pageNumber = _filteredPages.length;
    _pageActive = 0;
}

// Load the pages
function _loadPages(pages_data){
    _pages = pages_data;
    reload();
};

// Filter the pages
function _filterPages( filterValue ){
    var nr = new RegExp(filterValue, 'i');
    _filteredPages = _pages.filter( function(page){
            var pageValues = _.map(page);
            var check = false;
            for (var i=0; i<pageValues.length; i++){
                if(pageValues[i]!=null && pageValues[i].match(nr) ){
                    check = true;
                }
            }
            return check;
    })
    _filteredPages = _.chunk(_filteredPages , 5);
    _pageNumber = _filteredPages.length;
    _pageActive = 0;
};


// Add Page
function _addPage( page ){
    _pages.push( page );
    reload();
};

// Delete Page
function _deletePage( id ){
    _pages.forEach( function( page, index ){
        if( page.id == id ){
            _pages.splice( index,1 )
        }
    });
    reload();
};

// Edit existing Page
function _editPage( newpage ){
    _pages.forEach( function( page, index ){
        if(page.id == newpage.id){
            _pages.splice( index, 1, newpage );
        }
    });
    reload();
};

// Open/Close - Edit/Add modal
function _setModal( isVisible, dataToShow ){
        ModalState._setModalState( isVisible, dataToShow )
};

// Open/Close - Info Modal
function _setInfoModal( isVisible ) {
    _InfoModal = isVisible;
}

// Open/Close - Warn Modal
function _setWarnModal(isVisible, id){
    if( isVisible ){
        WarnModalState._setModalState( true, id )
    }
    else {
        WarnModalState._setModalState( false, null );
    }
}

// **************************** App Store ******************************* //
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
      if ( _filteredPages[0] != null ){
          return _filteredPages[_pageActive];

      }
      else {
          return [];
      }
  },

  getModalState: function(){
    return {
        isVisible: ModalState._isModalVisible,
        data: ModalState._dataToShow
        };
  },

  getInfoModalState: function () {
      return _InfoModal;
  },

  getWarnModalState: function () {
      return {
          isVisible: WarnModalState._isModalVisible,
          pageById: WarnModalState._pageById
      }
  },

  getPaginationState: function () {
      return {
          pageNumber: _pageNumber,
          pageActive: _pageActive
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

        case AppConstants.SET_MAIN_MODAL:
            _setModal(action.isVisible, action.page);
        break;

        case AppConstants.SET_INFO_MODAL:
            _setInfoModal(action.isVisible);
        break;

        case AppConstants.SET_WARN_MODAL:
            _setWarnModal(action.isVisible, action.id)
        break;

        case AppConstants.ACTIVE_PAGE:
            _pageActive = action.activePage;
        }
        AppStore.emitChange();

        return true; //Promises Requirement
  })
})

module.exports = AppStore;
