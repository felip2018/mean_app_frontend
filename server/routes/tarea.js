module.exports = function(app){

    var tareaCtrl = require('../controllers/tarea');

    app.route('/api/tareas')
    .get(tareaCtrl.list_all)
    .post(tareaCtrl.create);

    app.route('/api/tareas/:tareaId')
    .get(tareaCtrl.get)
    .put(tareaCtrl.update)
    .delete(tareaCtrl.delete);
}