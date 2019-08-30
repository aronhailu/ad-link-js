 var adLink = function (URL, windowName, windowWidth, windowHight) {

    var downloadLink = document.querySelectorAll('a.download');

        for(var i = 0; i < downloadLink.length; i++) {

            var condition = true;

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

module.exports = adLink;










   

