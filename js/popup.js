$(function(){ 
    var tweets = '';
    chrome.storage.local.get(function (data) { 
        Object.keys(data).forEach(function(key){
            var val = this[key];
            list = val.split('/');
            var twt = "<li><div class='deletebtn' id='"+ key +"' ><i class='fas fa-times fa-2x'></i></div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + list[0] + "/status/" + list[1] + "'></a></blockquote></li>";
            console.log(key);
            tweets = twt + tweets;
        },data);
    $('.cliped-tweets').html(tweets);
    twttr.widgets.load()
    $("div.holder").jPages({
        containerID : "itemContainer",
        previous:'PREVIOUS',
        next:'NEXT',
    });
     
    });


    $(document).on('click','.deletebtn',function(){
        var key = $(this).attr('id');
        var self = this;
        chrome.storage.local.remove(key,function(){
            if(chrome.runtime.lastError){
                 return;
            }else{
                 $(self).parents('li').remove();
            };
        });
    });
});