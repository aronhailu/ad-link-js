/*
*To links or buttons you want to add AdLink give class attribue of download (class="download")
* pass argument of URL, window name, windown width and window height for the popup AdPage to be opened
*/

var URL = 'http://www.damaengineeringsolution.com';
var windowName = 'DAMA_ENGINEERING';
var windowWidth = '700';
var windowHight = '600';

 (function() {

    // get all download links on the web page

    var downloadLink = document.querySelectorAll('a.download');

    openAdPage();
    
   function openAdPage() {

        for(var i = 0; i < downloadLink.length; i++) {

            var condition = true;
                    
            // bount every download link with event handler for click event

            downloadLink[i].addEventListener('click', function() {
                
                setTimeout(function status() {

                    condition = true;
                    alert('time out expires');

                }, 15000);

                if(condition) {

                        var centerLeft = (screen.width/2) - (windowWidth/2);
                        var centerTop = (screen.height/2) - (windowHight/2);
                        var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no ';

                        this.setAttribute("href", "#");

                        window.open(URL, windowName, windowFeatures + ', width=' + windowWidth + ', height=' + windowHight + ', top=' +
                        centerTop + ', left=' + centerLeft);

                        condition = false;
                        

                }else if(!condition) {

                    alert("before expires");

                    this.setAttribute("href", "http://www.google.com");

                }
                   
            });
              
        }

    };

})(URL, windowName, windowWidth, windowHight);










   
