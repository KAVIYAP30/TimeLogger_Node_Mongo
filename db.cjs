const {MongoClient} = require('mongodb')
let db
function connecttoDb(startServer){ //start server is call back func
     MongoClient.connect('mongodb+srv://kaviya:12345@cluster0.rlxl5aq.mongodb.net/Timelogger?retryWrites=true&w=majority').then(function(client){  //.then return client
        db=client.db()
        return startServer()
        // console.log(db)
     }).catch(function(error){
        return startServer(error)
     }) 
     
    
}
function getDb(){
    return db
}
module.exports = {connecttoDb,getDb}