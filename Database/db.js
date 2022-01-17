const mongodb=require('mongodb'); //import mongodb
const mongo_client=mongodb.MongoClient; //calling mongoclient

let db_url="mongodb+srv://Avishek1213:ritika.9@cluster0.7qaa8.mongodb.net/products?retryWrites=true&w=majority"
let _db;

const mongoconnect=(callback)=>{
    mongo_client.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(clientValue=>{
        console.log(clientValue,"database connected");
        _db=clientValue.db('Products');
        callback();
    })
    .catch(err=>{
        console.log("connection error",err)
    })
}

const getDb=()=>{
    if(_db)
    {
        return _db;
    }
    else{
        console.log("db not found");
    }
}


exports.mongoconnect=mongoconnect;
exports.getDb=getDb;