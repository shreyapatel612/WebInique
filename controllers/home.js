var aboutusModel = require('../models/aboutus');
var serviceModel = require('../models/services');
var skillModel = require('../models/skills');
var clientModel = require('../models/clients');
var workModel = require('../models/work');
var contactModel = require('../models/contactus');
const mongoose = require('mongoose');


exports.work = function(req,res,next){
    var details = new workModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        total : req.body.total
    });
    details.save().then(
        doc =>
        {
            res.status('200').json({message: "Work Details Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({messgae : "work Details Not Inserted!",status: 'fail',data : err})}
    )
}

exports.fetchworkbyId = function(req,res){
    workModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of Work!",status : 'success',data : result})
        }
    })
}

exports.updatework = function(req,res){
    workModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Work Updated",status :"success",result});
    })
}

exports.deletework = function(req,res){
    workModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message : "Not Found!",status : "fail"});
        }
        res.send({message : "Work Deleted!",status : 'success',result});
    })
}

exports.aboutus = function(req,res,next){
    console.log('here');
    var details = new aboutusModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        description : req.body.description
    });
    details.save().then(
        doc => 
        {
            res.status('200').json( {message: "About Us Details Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({message : "About Us Details Not Inserted!",status: 'fail',data : err}) }
    )
}

exports.fetchaboutusbyId = function(req,res){
    aboutusModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of AboutUs!",status : 'success',data : result})
        }
    })
}

exports.updateaboutus = function(req,res){
    aboutusModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "AboutUs Updated!",status : "status",result});
    })
}

exports.deleteaboutus = function(req,res){
    aboutusModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message : "Not Found",status : "fail"});
        }
        res.send({message : "About Us Deleted!",status : 'success',result});
    })
}


exports.services = function(req,res,next){
    var details = new serviceModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        description : req.body.description
    });
    details.save().then(
        doc =>
        {
            res.status('200').json({message: "Service Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({message : "Service not Inserted!",status: 'fail',data : err})}
    )
}

exports.fetchservicebyId = function(req,res){
    serviceModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of Service!",status : 'success',data : result})
        }
    })
}

exports.updateservice = function(req,res){
    serviceModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Service Updated!",status : "status",result});
    })
}

exports.deleteservice = function(req,res){
    serviceModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message : "Not Found",status : "fail"});
        }
        res.send({message : "Service Deleted!",status : 'success',result});
    })
        
}

exports.skills = function(req,res,next){
    var details = new skillModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name
    });
    details.save().then(
        doc =>
        {
            res.status('200').json({message: "Skill Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({message : "Skill not Inserted!",status: 'fail',data : err})}
    )
}

exports.fetchskillbyId = function(req,res){
    skillModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of Skill!",status : 'success',data : result})
        }
    })
}

exports.updateskill = function(req,res){
    skillModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Skill Updated!",status : "success",result});
    })
}

exports.deleteskill = function(req,res){
    skillModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Skill Deleted!",status : 'success',result});
    })
}

exports.clients = function(req,res,next){
    var details = new clientModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        review : req.body.review
    });
    details.save().then(
        doc =>
        {
            res.status('200').json({message: "client Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({message : "client not Inserted!",status: 'fail',data : err})}
    )
}

exports.fetchclientbyId = function(req,res){
    clientModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of Client!",status : 'success',data : result})
        }
    })
}

exports.updateclient = function(req,res){
    clientModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Client Updated!",status : "status",result});
    })
}

exports.deleteclient = function(req,res){
    clientModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Client Deleted!",status : 'success',result});
    })
}

exports.contactus = function(req,res,next){
    var details = new contactModel({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        message : req.body.message
    });
    details.save().then(
        doc =>
        {
            res.status('200').json({message: "contactus Inserted!",status : 'success',data : doc})
        }
    ).catch(
        err=>{res.json({message : "contactus not Inserted!",status: 'fail',data : err})}
    )
}

exports.fetchcontactbyId = function(req,res){
    contactModel.find({_id:req.body.id},function(err,result){
        if(!result){
            res.send({message : "Id is not correct!",status : 'fail'})
        }
        else{
            res.send({message : "Details Of Contact!",status : 'success',data : result})
        }
    })
}

exports.updatecontactus = function(req,res){
    contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "ContactUs Updated!",status : "status",result});
    })
}

exports.deletecontactus = function(req,res){
    contactModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(!result){
            return res.status(404).send({message:"No Item Found",status : "fail"});
        }
        res.send({message : "Contact Deleted!",status : 'success',result});
    })
}

