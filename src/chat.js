var net = require('net');
var chatServer = net.createServer();
clientList = [];
chatServer.on("connection", function(client) {
    client.write('Hi!\n');
    client.name = client.remoteAddress + ":" + client.remotePort;
    client.write('Hi' + client.name + '\n');
    clientList.push(client);
    client.on('data', function(data) {
        broadcast(data, client);
    });
    //客户端退出
    client.on('end', function() {
        console.log(client.name + " quit");
        clientList.splice(clientList.indexOf(client), 1);
    });
    //记录错误日志
    client.on('error', function(e) {
        console.log(e);
    })

});

function broadcast(msg, client) {
    var cleanup = [];
    for (var i = 0, clen = clientList.length; i < clen; i++) {
        if (client !== clientList[i]) {
            //检查socket是否可写
            if (clientList[i].writable) {
                clientList[i].write(client.name + " says " + msg + "\n");
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy(); //对断开连接的socket进行销毁
            }
        }
    }
    //在写入循环中删除死节点，消除垃圾索引
    for (var i = 0, clenuplen = cleanup.length; i < clenuplen; i++) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1);
    }
}
chatServer.listen(9000);