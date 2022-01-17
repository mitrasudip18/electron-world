const path=require('path');

const mongodb=require('mongodb');
const getDb=require('../Database/db').getDb;

module.exports=class Registration
{
    constructor(rfname,rlname,rcity,rpin,rphone,remail,rpass)
    {
        this.Fname=rfname;
        this.Lname=rlname;
        this.City=rcity;
        this.Pin=rpin;
        this.Phone=rphone;
        this.Email=remail;
        this.Pass=rpass;
    }

    



    saveData()
    {
        const db=getDb();
        let dbOperations;
        if(this._pid)
        {
        dbOperations=db.collection('reg_data').updateOne({_id:new mongodb.ObjectId(this._pid)},{$set:this});
        }

        else{
            dbOperations=db.collection('reg_data').insertOne(this)
        }
        return dbOperations.then(results=>{
            console.log("data inserted:",results);
        })
        .catch(err=>{
            console.log("data is not inserted",err);
        })
    }

    static fetchProductData(Fname)
{
    const db=getDb();
    // var mysort = { Fname: 1 };
    var mysort = { Fname: -1 };

    return db.collection('reg_data').find().sort(mysort).toArray().then(products=>{
        return products;
    }).catch(err=>{
        console.log(err);
    })
}
static searchProduct(City)
{
    const db=getDb();
    return db.collection('reg_data').find({ City: City}).toArray()
    .then((result)=>{
        console.log("search done",result);
        return result;
    })
    .catch(err=>{
        console.log(err);
    })
}
}

