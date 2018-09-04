var https = require('https'); 
                          
module.exports = function getHTML(options,callback) {

https.get(options, function (response) {
  response.setEncoding('utf8');
  var bufferString = '';
  
  response.on('data', function (data) {
   bufferString = bufferString + data;
  });

  response.on('end', function() {
    //console.log(bufferString);
    callback(bufferString);
    console.log('Response stream complete.');
  });
});
}
