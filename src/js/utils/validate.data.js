module.exports = {
        isValidTitle: function (title) {
            if (title.trim().length>0){
                return true;
            }
            return false;
        }
}
