var express = require('express');
var workModel = require('../models/work');
var serviceModel = require('../models/services');
var skillModel = require('../models/skills');
var clientModel = require('../models/clients');
var contactModel = require('../models/contactus');
var aboutusModel = require('../models/aboutus');

var router = express.Router();
const homeController = require("../controllers/home");

var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//All Records
router.get('/',function(req,res){
    let work
    let aboutus
    let service
    let skill
    let client
    let contact

    work = workModel.find({},function(err,work){
    aboutus = aboutusModel.find({},function(err,aboutus){
    service = serviceModel.find({},function(err,service){
    skill = skillModel.find({},function(err,skill){
    client = clientModel.find({},function(err,client){
    contact = contactModel.find({},function(err,contact){
        res.send({status : 'success',
        works : work,
        aboutus : aboutus,
        services : service,
        skills : skill,
        clients : client,
        contactus : contact
    })
    })
    })
    })
    })
    })
    })
});

router.get('/work',function(req,res){
    workModel.find({},function(err,data){
        res.send({status : 'success',data : data})
    })
})
router.get('/aboutus',function(req,res){
    aboutusModel.find({},function(err,data){
        res.send({status : 'success',data : data});
    })
});
router.get('/services',function(req,res){
    serviceModel.find({},function(err,data){
        res.send({status : 'success',data : data});
    })
});
router.get('/skills',function(req,res){
    skillModel.find({},function(err,data){
        res.send({status : 'success',data : data});
    })
});
router.get('/clients',function(req,res){
    clientModel.find({},function(err,data){
        res.send({status : 'success',data : data});
    })
});
router.get('/contactus',function(req,res){
    contactModel.find({},function(err,data){
        res.send({status : 'success',data : data});
    })
});


//Insert
router.post('/work',homeController.work);
router.post('/aboutus',homeController.aboutus);
router.post('/services',homeController.services);
router.post('/skills',homeController.skills);
router.post('/clients',homeController.clients);
router.post('/contactus',homeController.contactus);

//Fetch
router.post('/work/findbyId',homeController.fetchworkbyId);
router.post('/aboutus/findbyId',homeController.fetchaboutusbyId);
router.post('/services/findbyId',homeController.fetchservicebyId);
router.post('/skills/findbyId',homeController.fetchskillbyId);
router.post('/clients/findbyId',homeController.fetchclientbyId);
router.post('/contactus/findbyId',homeController.fetchcontactbyId);

//Delete
router.delete('/work/:id',homeController.deletework);
router.delete('/aboutus/:id',homeController.deleteaboutus);
router.delete('/services/:id',homeController.deleteservice);
router.delete('/skills/:id',homeController.deleteskill);
router.delete('/clients/:id',homeController.deleteclient);
router.delete('/contactus/:id',homeController.deletecontactus);

//Update
router.patch('/work/:id',homeController.updatework);
router.patch('/aboutus/:id',homeController.updateaboutus);
router.patch('/services/:id',homeController.updateservice);
router.patch('/skills/:id',homeController.updateskill);
router.patch('/clients/:id',homeController.updateclient);
router.patch('/contactus/:id',homeController.updatecontactus);

module.exports = router;