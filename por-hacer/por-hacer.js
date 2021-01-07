
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) 
            throw new Error(`No se pudo guardar la data.`);
        });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();
    return porHacer;
    
}

const getlistado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar = (descripcion) => {
    
    cargarDB();

    try {
        listadoPorHacer = listadoPorHacer.filter( tarea => tarea.descripcion != descripcion);
        console.log(listadoPorHacer);
        guardarDB();
        return true;
    } catch (error){
        return false;
    }

}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}