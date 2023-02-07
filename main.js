var http = require('http')
const myServer = (req,res) => {
    if (req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else{
        res.end('Invalid Request!');}
}

var server = http.createServer(myServer)

const PORT = 5000
server.listen(PORT)
console.log("Server it up")
