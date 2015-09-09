var formatDate = require( './formatdates.js' );

module.exports = {
    friendlyPage: function ( page ){
            switch (page.type){
                case 0 : page.type = "Menu" ;
                    break;
                case 1 : page.type = "Events" ;
                    break;
                default: page.type = "Content" ;
                    break;
            }
            page.publishedOn = formatDate.fromXSD( page.publishedOn );
            return page;
    },
    friendlyPages: function ( pages ) {
        var _self = this;
        return pages.map(function( page ){
            return _self.friendlyPage( page );
        });
    },
    toAzurePage: function ( page ){
        switch (page.type){
            case "Menu" : page.type = 0 ;
                break;
            case "Events": page.type = 1 ;
                break;
            default: page.type = 2 ;
                break;
        };
        var publishedNow = new Date();
        page.publishedOn = formatDate.toXSD( publishedNow )
        return page;
    }

};
