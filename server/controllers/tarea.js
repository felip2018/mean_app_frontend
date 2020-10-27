var mongoose = require('mongoose');
var Tarea = require('../models/tarea');

exports.list_all = function(req,res){
    res.send('<Lista de tareas>');
    /*Tarea.find({}, function(err,tarea){
        if(err) res.send(err);
        res.json(tarea);
    });*/
};

exports.create = function(req,res){
    //res.send('<Crear tarea>');
    var new_tarea = new Tarea(req.body);
    new_tarea.save(function(err, tarea){
        if(err) res.send(err);
        res.json(tarea);
    });
};

exports.get = function(req,res){
    //res.send('<Consultar tarea>');
    Tarea.findById(req.params.tareaId, function(err,tarea){
        if(err) res.send(err);
        res.json(tarea);
    });
};

exports.update = function(req,res){
    //res.send('<Actualizar tarea>');
    Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body, {new: true}, function (err,tarea) {
        if(err) res.send(err);
        res.json(tarea);
    });
};

exports.delete = function(req,res){
    //res.send('<Eliminar tarea>');
    Tarea.remove({_id: req.params.tareaId}, function (err,tarea) {
        if(err) res.send(err);
        res.json({message:'Tarea eliminada correctamente!'});
    })
};