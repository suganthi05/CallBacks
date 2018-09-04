var https = require('https');                               
function getAndPrintHTML() {

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};
https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  var bufferString = '';
  
  response.on('data', function (data) {
   bufferString = bufferString + data;
  });

  response.on('end', function() {
    console.log(bufferString);
    console.log('Response stream complete.');
  });
});
}
getAndPrintHTML();


