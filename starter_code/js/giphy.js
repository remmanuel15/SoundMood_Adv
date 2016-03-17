window.Giphy = new (function(){
    this.key = "dc6zaTOxFJmzC";
    this.root = "//api.giphy.com";
    
    var that = this;
    
    this.searchByWord = function(word, limit, callback){
        $.ajax({
            url : that.root+'/v1/gifs/search'
            ,data : {
                q : word
                ,limit : limit
                ,api_key : that.key
            }
            ,success:function(response){
                callback(response.data);
            }
        });
    }
})();