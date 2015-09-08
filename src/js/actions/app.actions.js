var AppConstants = require( '../constants/app.constants' ),
    AppDispatcher = require( '../dispatcher/app.dispatcher' );

var AppActions = {
    //Load initial data
    loadPages: function(pages){
        AppDispatcher.handleAction({
            actionType: AppConstants.LOAD_PAGES,
            pages: pages
        })
    },
    // Add new Page
    addPage: function(page){
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_PAGE,
            page: page
        })
    },
    // Delete a Page
    deletePage: function(id){
        AppDispatcher.handleAction({
            actionType: AppConstants.DELETE_PAGE,
            id: id
        })
    },
    // Edit a Page
    editPage: function(page){
        AppDispatcher.handleAction({
            actionType: AppConstants.EDIT_PAGE,
            page: page
        })
    },
    // Visibillity of Edit/Add Modal
    isModalVisible: function(isVisible, id){
        AppDispatcher.handleAction({
            actionType: AppConstants.MODAL_VISIBLE,
            isVisible: isVisible,
            id: id
        })
    }
}

module.exports = AppActions;
