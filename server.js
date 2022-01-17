const express=require('express');
const appserver = express();
const path=require('path');

const reg_router = require('./Router/regroute');


const mongoconnect= require('./Database/db').mongoconnect;
//it only import mongo connect method


appserver.use(express.urlencoded());



appserver.set('view engine', 'ejs');
appserver.set('views','view'); //views is predefine but view is folder name

appserver.use(express.static(path.join(__dirname,'public')))

appserver.use(reg_router);



mongoconnect(()=>{
    appserver.listen(1928,()=>{
        console.log("server connected at localhost:1928")
    })
})


