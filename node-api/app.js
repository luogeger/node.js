/**
 * Created by xiaoq on 2017/12/25.
 */

"use strict";
const express = require('express');
const orm = require('orm');
const http = require('http');

let app = express();
app.listen(9999)


var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/blain"});
    res.write("Hello NodeJs...");
    res.end();
});

server.listen(8888, "172.16.47.22")