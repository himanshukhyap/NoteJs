var http = require('http');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');
//create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url)
//     res.write('<h1>Hello World!</h1>'); //write a response to the client
//     // fs.readFile('../FileSystem/demoFile.html', function (err, data) {
//     //    console.log(data.toString())
//     //     console.log(err)
//     // })
//     // var q = url.parse(req.url, true).query;
//     // var txt = q.year + " " + q.month;
//     // res.write(txt);                 // http://localhost:5000/?year=2017&month=July
  

//     var adr = 'http://localhost:5000/default.htm?year=2017&month=february';
//     var q = url.parse(adr, true);

//     // console.log("Return Host"+q.host); //returns 'localhost:5000'
//     // console.log("pathname"+q.pathname); //returns '/default.htm'
//     // console.log("search"+q.search); //returns '?year=2017&month=february'
    
//     // var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//     // console.log(qdata.month); //returns 'february'


//     res.end("<h1>Res End</h1>"); //end the response
    
// }).listen(5000); //the server object listens on port 8080

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
       
         var newpath = 'D:/NoteJs/NoteJS_Basic/Server/' + files.filetoupload.originalFilename;
         console.log(newpath)
        // fs.rename(oldpath, newpath, function (err) {
        //   if (err) throw err;
        //   res.write('File uploaded and moved!');
        //   res.end();
        // });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(5000);