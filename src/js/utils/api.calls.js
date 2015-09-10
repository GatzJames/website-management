var request = require( 'qwest' );
var AppActions = require( '../actions/app.actions' )
var formatData = require( './formatdata.js' )
//Basic Api Configuration
request.base = "http://pagesmanagement.azurewebsites.net/api/ResponsivePages/"  //The base URI for Requests
var dtype = "json";  // Data Type


module.exports = {
    // Get all available pages
    getPages: function (){
        request.get( '', { dataType : dtype } )
               .then( function(res, data){  // On success load Pages to View
                   AppActions.loadPages( formatData.friendlyPages(data) );
               });
    },
    // Add a new Page
    addPage: function ( page ){
        page = formatData.toAzurePage( page );
        console.log('PAGE-TO-ADD:', page); //Test
        request.post( '', page, {dataType: dtype })
               .then( function(res, azurePage){ // On success add Page to View
                   console.log("pageGot: ", azurePage); // Test
                   AppActions.addPage( formatData.friendlyPage(azurePage) );
               })
               .catch(function(res, data, err){
                   console.log(err); //Test
               });
    },

    // Delete a page by Id
    deletePage: function (id){

        request.delete(id)
               .then( function( res, deletedPage ){ // On success delete Page from View
                   console.log("DELETED-PAGE: ", deletedPage); // Test
                   AppActions.deletePage( deletedPage.id );
               })
    },
    // Edit a page by id
    editPage: function ( page ){
        console.log("EDIT-PAGE", page.id);
        page = formatData.toAzurePage( page );
        request.put(page.id, page, {dataType: dtype})
               .then( function(){ // After Confirmation Get the page to show it's Data
                   request.get(page.id, { dataType : dtype })
                          .then( function( res, edditedPage ){
                              AppActions.editPage( formatData.friendlyPage( edditedPage ) );
                          });
               })
    }
}
