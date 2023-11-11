const http=require('http');
const Capp =require('./Capp');

const server=http.createServer(Capp);

server.listen(3000);