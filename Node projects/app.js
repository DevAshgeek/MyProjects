const http = require('http')
var url = require('url')

http.createServer(function(req, res){
    var route = req.url
    if(route === '/')
    {
        res.end('this is info from backend to home page 1')
    }
    if(route === '/getusernames'){
        var usernames = ['Sachin','Messi','Ronaldo']
        res.end(JSON.stringify(usernames));
    }
    console.log('My server started running')
}).listen(8000,'localhost',() => {
    console.log(`Server is running`)})