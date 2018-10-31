$(function(){ 
    
   //Append buttons
   $('.ProfileTweet-actionList.js-actions').append("<a class=' button-small button-trigger  rounded3'>Clip</a>");


   //Click button
   $(document).on('click','.button-trigger',function(){
      var self = this;
      $(this).removeClass('button-trigger');
      $(this).addClass('button-load');
      $(this).html('Load');

      //Get UserID
      var userId = $(this).parents('.tweet').attr('data-screen-name');
      
      //Get TweetID
      var twtId = $(this).parents('.tweet').attr('data-item-id');
      
      saveVal = userId + '/' + twtId;

      chrome.storage.local.get(function (data) { 
          var keyarray = Object.keys(data);
          console.log(keyarray);
          
          var len = keyarray.length + 1;
          console.log(len);
          
          var key = Number(keyarray[len-2]) + 1;
          if(isNaN(key) === true){
              key = 1;
          };
 
          chrome.storage.local.set({[key]:saveVal}, function(){
            if(chrome.runtime.lastError)
            {
                $(self).removeClass('button-load');
                $(self).addClass('button-trigger');
                $(self).html('error');
                return;
            }
            else{
                $(self).removeClass('button-load');
                $(self).addClass('button-save')
                $(self).html('Cliped');
            }
        
          });
      });
    
       
    });
    


   //Stream observer
   const target = document.getElementById('stream-items-id');
   const observer = new MutationObserver(records => {
　 $('.button-small').remove();
   $('.ProfileTweet-actionList.js-actions').append("<a class=' button-small button-trigger rounded3'>Clip</a>");
   });

   const options ={
       childList: true
   };
      
   observer.observe(target, options);
   

});