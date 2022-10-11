//export  const express = require('express');
import express from 'express'
const enrutador = express.Router();
const servicios = require('./conClase');
const sUsuarios = new servicios.usuarioMov();
const sLinks = new servicios.links();

enrutador.post('/create', async (req, res) => {
    var a = await sUsuarios.create(req.body) 

    console.log(`se recibe: +${a}`);
    if (a == 1){
        res.json(a);
    }
    else{
        console.log("aaaaaa")
        res.status(409).send('Something broke!');
    }
});

enrutador.post('/login', async(req,res)=> {
    
    res.json(await sUsuarios.login(req.body))
})

enrutador.delete('/link/:id', async (req, res) => {
    res.json(await sLinks.deleteLink(req.params.id));
});

enrutador.delete('/u/:id', async (req, res) => {
    res.json(await sUsuarios.deleteUser(req.params.id));
});

enrutador.post('/changeRol', async (req, res) => {
    res.json(await sUsuarios.changeRolUser(req.body));
});

enrutador.post('/nuevoLink', async(req,res)=>{
    res.json(await sLinks.saveLink(req.body.id, req.body.date));
});



enrutador.put('/:id', async (req, res) => {
    res.json(await sUsuarios.editUser(req.params.id, req.body));
});

enrutador.get('/GetLinks', async (req,res) => {
    res.json(await sLinks.getAll());
});

enrutador.get('/all', async (req,res) => {
    res.json(await sUsuarios.getAll());
});

enrutador.get('/u/:id', async(req,res) => {
    res.json(await sUsuarios.getUser(req.params.id));
});

enrutador.get('/getuserrol/:id', async(req,res) => {
    res.json(await sUsuarios.getUserRoles(req.params.id))
});

enrutador.get('/getroles', async(req,res) => {
    res.json(await sUsuarios.getRoles())
});

module.exports = enrutador;