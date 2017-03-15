var cluster=require('cluster');
var http=require('http');

var numCPUs=require('os').cpus().length;

if(cluster.isMaster){
    //创作工作进程
    for(var i=0;i<numCPUs;i++){
        cluster.fork();
        console.log('cpus:'+i)
    }
    cluster.on('death',function(worker){
        console.log('worker '+worker.pid+' died');
    })
}else{
    http.createServer(function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf8"});
        res.end("hello world!");

    }).listen(8000);
}
