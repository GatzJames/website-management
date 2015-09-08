module.exports = {
    fromXSD: function (date){
        var newDate = date.substr(0,10)
                          .replace(/\-/g, '/')
                          .split('/')
                          .reverse()
                          .join('/');
        var time = date.substr(11,5);
        return (newDate + " " + time);
    },
    toXSD: function (date){
        return date = date.toISOString().replace('Z','');
    }
}
