const express=require('express');
const reg_router=express.Router();
const reg_controller=require('../Controller/regcontroller')

reg_router.get('/home',reg_controller.getformdisplay)



reg_router.post('/postValue',reg_controller.postformvalue)

reg_router.get('/details',reg_controller.getdetails)

reg_router.post('/srch',reg_controller.searchpro);

module.exports = reg_router;