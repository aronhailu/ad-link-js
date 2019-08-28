var URL = 'http://www.damaengineeringsolution.com';
var windowName = 'DAMA_ENGINEERING';
var windowWidth = '700';
var windowHight = '600';

(function() {

    var downloadButton = document.querySelectorAll('.download');

    // 1. on first click attach the eventhandler to all button/anchor link and set href attribute of button/anchor to #

   function oneTimeEventListen() {

        for(var i=0; i<downloadButton.length; i++) {

        
                    
            downloadButton[i].addEventListener('click', function addAdLink() {
    
                //   var child = downloadButton[i].firstChild  ;
                //   console.log(child);
                //   var parent = downloadButton[i].parentElement;
                //   console.log('parent: ' + parent);
    
                
    
                //this.removeEventListener('click', addAdLink);

                this.setAttribute("href", "#");
                // this.parentNode.setAttribute("href", "#");
                // this.childNode.setAttribute("href", "#");
                
    
            
                var centerLeft = (screen.width/2) - (windowWidth/2);
                var centerTop = (screen.height/2) - (windowHight/2);
                var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no ';
        
                window.open(URL, windowName, windowFeatures + ', width=' + windowWidth + ', height=' + windowHight + ', top=' +
                centerTop + ', left=' + centerLeft);

                //this.setAttribute("href", "http://www.google.com");

                      
                   
                // 2. then detach the eventhandler from the button/anchor 
            }, { once: true });
    
        }
    
    };

    oneTimeEventListen();

     
    // 3. agian attach the Ad link event handler after 15min

    setInterval(oneTimeEventListen, 15000);

})(URL, windowName, windowWidth, windowHight);





// 3. if we click within this 5sec the button/anchor will direct us to the original link





   
