var URL = 'http://www.damaengineeringsolution.com';
var windowName = 'DAMA_ENGINEERING';
var windowWidth = '700';
var windowHight = '600';

(function() {

    var downloadButton = document.querySelectorAll('.download');
    
    for(var i=0; i<downloadButton.length; i++) {
        
        downloadButton[i].addEventListener('click', function() {

            var centerLeft = (screen.width/2) - (windowWidth/2);
            var centerTop = (screen.height/2) - (windowHight/2);
            var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no ';
    
            return window.open(URL, windowName, windowFeatures + ', width=' + windowWidth + ', height=' + windowHight + ', top=' + centerTop +
                    ', left=' + centerLeft);
    
       });

    }

})(URL, windowName, windowWidth, windowHight);





   
