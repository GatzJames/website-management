module.exports = {
        isValidTitle: function (title) {
            if(title!=null){
                console.log('INHERE');
                if (title.replace(/\s/g,'').length>0){
                    return true;
                }
            }
            return false;
        }
}
