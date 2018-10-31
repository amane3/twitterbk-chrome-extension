chrome.tabs.onUpdated.addListener(function(tabid, inf){
    if (inf.status === 'loading') {
    chrome.tabs.executeScript(null,
        {file: "js/jquery.js"}, function(){
            chrome.tabs.executeScript(null,
                {file: "js/script.js"}, function(){    
        });
   });
  }; 
});

