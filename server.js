const express = require('express')
const app = express()
const path = require('path')
const apiRoute = require('./routes/apiroute')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/' , express.static(path.join(__dirname , "public")))
app.use('/apiRoute' , apiRoute )


app.listen("4561" , function(){
    console.log("server started")
})