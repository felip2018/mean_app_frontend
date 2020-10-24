exports.list_all = function(req,res){
    res.send('<Lista de tareas>');
};

exports.create = function(req,res){
    res.send('<Crear tarea>');
};

exports.get = function(req,res){
    res.send('<Consultar tarea>');
};

exports.update = function(req,res){
    res.send('<Actualizar tarea>');
};

exports.delete = function(req,res){
    res.send('<Eliminar tarea>');
};