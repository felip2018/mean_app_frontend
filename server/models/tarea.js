/**
 * Crearemos el modelo de datos "tarea" con los siguientes campos:
 * - titulo 
 * - creada (fecha creacion)
 * - estado ('Por hacer',''En progreso','Hecha')
 * 
 * Este modelo lo crearemos usando Mongoose, de esta manera, el modelo dispondrá
 * de forma automática de todos los métodos necesarios para trabajar con la base de datos
 * MongoDB
 */

var mongoose = require('mongoose');
const { stringify } = require('querystring');
var Schema = mongoose.Schema;

var tareaSchema = new Schema({

    titulo:{
        type: String,
        required: 'El campo título es obligatorio'
    },

    fecha:{
        type: Date,
        default: Date.now
    },

    estado:{
        type:[{
            type:String,
            enum: ['Por hacer','En progreso','Hecha']
        }],
        default:['Por hacer']
    }

});