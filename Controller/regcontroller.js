const RegModel=require("../Model/Registration");


exports.getformdisplay=(req,res)=>{
    res.render('Admin/addproduct', {
        title_page:"My form"
    })
}


exports.postformvalue=(req,res)=>{
    console.log("collected value form form: ", req.body);
    const Fname = req.body.fname;
    const Lname = req.body.lname;
    const City = req.body.city;
    const Pin = req.body.pin;
    const Phone=req.body.phone;
    const Email =req.body.email;
    const Pass =req.body.pas;
    const Registration=new RegModel(Fname,Lname,City,Pin,Phone,Email,Pass,null);
    Registration.saveData().then(results=>{
        console.log('registration done',results);
    }).catch(err=>{
        console.log("registration not done",err)
    });
    res.redirect('/details');

}

exports.getdetails=(req,res)=>{
    RegModel.fetchProductData().then(products=> {
        console.log("products: ",products);
        res.render('details/table' ,{
            title:"details page", 
            data : products

    });
}).catch(err=>{
    console.log("data fetching error",err);
})  
}

exports.searchpro=(req,res)=>{
    const City=req.body.search;
    console.log("searching text: ",City)
    RegModel.searchProduct(City).then(result=>{
        console.log(result);
        res.render('details/table',{
            title: "RegList",
            data: result
        });
    }).catch(err=>{
        console.log(err);
    })
}
