# ad-link-js

This is an npm package for adding advertisement link on download links of your web page. When the user click the download link a timer starts to count and he will be directed to advertisement site on popup window. If the user click the link before the timer expires he will be directed to the original download link otherwise he will be directed to the advertisement link again.


### Prerequisites

First you have to install the browserify package from npm to convert the package to something usable in the browser.

```
nmp install browserify –g

```

### Installing

Please follow the procedure below to install this package


Install the package in the root directory of your app 

```
npm install ad-link-js –save

```

Create a bundle.js file in the root directory of you app and add the following command in it

```
const adlink = require('ad-link-js');

adlink('http://www.damaengineeringsolution.com', 'Advertisemnt link', '700', '600');

```

Create a dest folder in root directory of you app and execute the following command

```
browserify bundle.js -o dist/bundle.js

```

Use the bundle.js file in dist folder as a script for your html file


```
<script src="dist/bundle.js"></script>

```

## Versioning

I have used [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Author

**Aron Hailu**


## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* to daniel(danidpx) who challenged me to do this library
* Inspiration
* etc

