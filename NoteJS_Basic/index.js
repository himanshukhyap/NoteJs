
//  const ownModule = require("./OwnModule.js")
// console.log(ownModule.myDateTime())

// const fs = require('fs');

// const folderName = 'mkdir';

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);

//   }
// } catch (err) {
//   console.error(err);
// }


// const fs = require('fs');

// fs.readFile('./FileSystem/demoFile.html', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('./FileSystem/demoFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(5000);