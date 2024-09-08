const http = require('http');
const fs =require('fs');
const {Console} = require('console')

const port =process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type' , 'text/html')
    console.log(res.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1>Hyy I am RAHUL </h1> <p> this is me</p>')
    }
    
    else{
        res.statusCode = 404; 
        res.end('<h1>not found</h1>')
    }
});
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});