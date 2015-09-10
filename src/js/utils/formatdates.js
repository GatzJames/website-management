module.exports = {
    fromXSD: function (date){
        var friendlyDate = date.substr(0,10)
                          .replace(/\-/g, '/')
                          .split('/')
                          .reverse()
                          .join('/');
        var friendlyTime = date.substr(11,5);
        return (friendlyDate + " " + friendlyTime);
    },
    toXSD: function (date){
        //var offset = "" + date.getTimezoneOffset();
        //var sign = ( offset >= 0 ) ? "-" : "+" ;
        //var offsetUTC = sign + ( "0" + ( offset.substr(1)/60 ) + ":00" ).substr(-5);
        return date = date.toISOString().replace('Z','');// + offsetUTC;
    }
}
