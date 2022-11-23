import React from "react";
import "./ListEvi.css"


import {Nav,NavItem,NavLink} from "reactstrap"


const ListEvi=()=>{
        return(
            <Nav
                fill
                pills
                >

            <NavItem>
                <NavLink
                id = "a"
                href="archivos"
                >
                Archivos
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink id = "b" 
                href="publicaciones"
                >
                Publicaciones
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink 
                id = "c" 
                href="proyectos"
                >
                Proyectos
                </NavLink>
            </NavItem>
            
            </Nav>
            
        )
    }


export default ListEvi
