const Tarea = require('./tarea');

class Tareas{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    get listadoArrCompletas() {
        const listadoCompletas = Object.values(this._listado).filter(tarea => tarea.completadoEn !== null);
        return listadoCompletas;
    }

    get listadoArrPendientes() {
        const listadoPendientes = Object.values(this._listado).filter(tarea => tarea.completadoEn === null);
        return listadoPendientes;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    completarTarea(desc) {
        const tarea = Object.values(this._listado).find(tarea => tarea.desc === desc);
        if (tarea) {
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
                console.log('Tarea completada con éxito.');
            } else {
                console.log('Esta tarea ya fue completada.');
            }
        } else {
            console.log('Esa tarea no existe.');
        }
    }

    borrarTarea(desc) {
        const tarea = Object.values(this._listado).find(tarea => tarea.desc === desc);
        if (tarea) {
            delete this._listado[tarea.id];
            console.log('Tarea borrada con éxito.');
        } else {
            console.log('No existe tarea con esa descripción.');
        }
    }
 
}

module.exports = Tareas;