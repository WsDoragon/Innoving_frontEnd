export const db = require('./db');
//const express = require("express");
import express from 'express'
//const cors = require("cors");
import cors from 'cors'

const app=express();

app.use(express.json());
app.use(cors());

class usuarioMov {
    
    async create(formulario:any){
        try{
            const result = await db.query(
                `INSERT INTO usuario (rut,nombre,apellido,correo,contraseña) VALUES ("${formulario.rut}","${formulario.Nombre}","${formulario.Apellido}","${formulario.correo}","${formulario.contraseña}")`
            )
            this.changeRolUser(formulario)
            console.log(result.affectedRows);
            return result.affectedRows;
        }
        catch (error) {
            console.log(`error es: \n ${error}`);
            return error;
        }
    }

    async getAll(){

        let json:any[] = [];
        const result = await db.query(`SELECT * FROM usuario`);
        for (let i of result){
            let rol ="-"
            const result2 = await db.query(`SELECT name FROM rol_usuario
                                            JOIN rol ON id=id_rol
                                            WHERE id_rut = "${i.rut}"`);
            for(let j of result2){
                rol = rol+j.name+"-";
            }
            let a = {"rut": i.rut, "nombre": i.nombre, "apellido":i.apellido, "correo": i.correo, "roles": rol};
            
            json.push(a);
        }
        return json;
    }

    async deleteUser(id:string){
        const result = await db.query(`delete from usuario where rut =${id}`);
        await db.query(`delete from rol_usuario where id_rut = ${id}`);
        return result.affectedRows;
    }

    async changeRolUser(creds:any){
        const result = await db.query(`delete from rol_usuario WHERE id_rut = "${creds.rut}"`)
        for(let i of creds.roles){
            const result2 = await db.query(`INSERT INTO rol_usuario(id_rut, id_rol) Values ("${creds.rut}",${i})`)
        }
        
    }


    async editUser(id:string,form:any){
        const result = await db.query(`update usuario set rut="${form.rut}", nombre="${form.Nombre}", apellido="${form.Apellido}", correo="${form.correo}", contraseña="${form.contraseña}" WHERE rut = ${id}`)
        await db.query(`delete from rol_usuario WHERE id_rut = ${id}`)
        this.changeRolUser(form)
        return result.affectedRows;
    }

    async getUser(id:string){
        const result = await db.query(`SELECT * FROM usuario WHERE rut = ${id}`);
        return result;
    }

    async login(creds:any){
        const a = 0;
        let hehe:any = {
            "rut": "",
            "roles": []
        }
        
        const result1 = await db.query(`SELECT * FROM usuario WHERE rut = "${creds.username}" AND contraseña = "${creds.password}"`);
        if (result1.length>0){
            const result2 = await db.query(`SELECT name from rol JOIN rol_usuario ON id = id_rol WHERE id_rut = "${creds.username}"`);
            hehe.rut = `${creds.username}`;
            for (let i = 0; i<result2.length; i++){
                hehe.roles[i] =result2[i]["name"];
            }
            return hehe;
        }
        else{
            return({message: "Wrong username/password combination!"});
        }
    }
    //Get all roles form DB
    async getRoles(){
        const result = await db.query(`SELECT * from rol`);
        return result;
    }

    async getUserRoles(cred :string){
        const result = await db.query(`SELECT id_rol from rol_usuario WHERE id_rut = ${cred}`);
        return result;
    }
}

class links{
    async saveLink(id: string, date: string){
        try{
            const result = await db.query(
                `INSERT INTO Links (id,expirationDate) VALUES ("${id}","${date}")`
            )
            return result.affectedRows;
        }
        catch (error) {
            console.log(`error es: \n ${error}`);
            return error;
        }
    }

    async getAll(){
        //let json = [];
        let json:any[] = [];
        const result = await db.query(`SELECT * FROM Links`);
        for (let i of result){
          let a= {"id": i.id, "expirationDate":i.expirationDate };
          json.push(a);
      }
      return json;
    }

    async deleteLink(id: string){
        const result = await db.query(`delete from Links where id =${id}`);
        return result.affectedRows;
    }
}

module.exports = {
    usuarioMov,
    links
};