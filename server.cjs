const express = require('express')
const bodyParser = require('body-parser')
const {connecttoDb,getDb} = require('./db.cjs')
// const {getDb} = require('./db.cjs')
const { request } = require('http')
const {ObjectId} = require('mongodb')
//app is backend application
//create new application
const app = express()
// __dirname access all the files in that directory for example nodejs2
app.use(express.static(__dirname))
let db
// body-parser convert body to an understadable form for nofe
app.use(bodyParser.json()) // node cannot read body directly,so body-parser change into a data
// connecting to the db
connecttoDb(function(error){
     // start the server
     if(!error){
     app.listen(1000)
     console.log("listening on 8012")
     db=getDb()
     // console.log(db)
}

     else{
          console.log(error)
     }
})

//POST METHOD
app.post('/add-entry',function(request,response){
     // console.log(request.body)
     db.collection('ExpenseData')
     .insertOne(request.body)
     .then(function(){
          response.status(201).json({//file created 201
               'status':'data successfully entered'
          })
     }).catch(function(error){
          response.status(500).json({
               'error':error
          })

     })
})