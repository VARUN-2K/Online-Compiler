const route = require('express').Router()

let request = require('request');

let a ;

route.post('/js' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "nodejs",
        stdin : req.body.input,
        versionIndex: "1",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/py' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "python3",
        versionIndex: "2",
        stdin : req.body.input,
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/php' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "php",
        stdin : req.body.input,
        versionIndex: "2",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/rb' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "ruby",
        stdin : req.body.input,
        versionIndex: "2",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/csharp' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "csharp",
        stdin : req.body.input,
        versionIndex: "2",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/java' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "java",
        stdin : req.body.input,
        versionIndex: "2",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})

route.post('/c' , function(req,res){
    let code = req.body.script
    var program = {
        script : code,
        language: "c",
        stdin : req.body.input,
        versionIndex: "3",
        clientId: "3721d7a9c292b8825c2896643631b563",
        clientSecret:"462cc6f0fc23ab1c49aae82046f55ccc46e0ecf240c2dfa816afcc6709a1b93b"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) { 
          
        console.log("hello world")     
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        console.log(a)
        res.send(body)
    });


})



exports = module.exports = route