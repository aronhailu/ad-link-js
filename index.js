/*
*To links or buttons you want to add AdLink give class attribue of download (class="download")
* pass argument of URL, window name, windown width and window height for the popup AdPage to be opened
*/

// var URL = 'http://www.damaengineeringsolution.com';
// var windowName = 'DAMA_ENGINEERING';
// var windowWidth = '700';
// var windowHight = '600';

exports.addLinkJs = (function() {

    // get all download links on the web page

    var downloadLink = document.querySelectorAll('a.download');

    openAdPage();
    
   function openAdPage() {

        for(var i = 0; i < downloadLink.length; i++) {

            var n=0;
                    
            // bount every download link with event handler for click event

            downloadLink[i].addEventListener('click', function() {

                n++;
    
                if( n % 2 == 0 ) {

                    // on the second click go to a link which is a value of href attribue

                    this.setAttribute("href", "http://www.google.com");

                }else {
                    
                    // on the first click open an Ad link on popup window

                    this.setAttribute("href", "#");
                    var centerLeft = (screen.width/2) - (windowWidth/2);
                    var centerTop = (screen.height/2) - (windowHight/2);
                    var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no ';
            
                    window.open(URL, windowName, windowFeatures + ', width=' + windowWidth + ', height=' + windowHight + ', top=' +
                    centerTop + ', left=' + centerLeft);
                }
                   
            });
              
        }

    };

})(URL, windowName, windowWidth, windowHight);










   
