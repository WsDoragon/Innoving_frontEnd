import React from "react";
import "./styles/ListEvi.css";

import { Nav, NavItem, NavLink } from "reactstrap";

const ListEvi = () => {
  return (
    <Nav fill pills>
      <NavItem>
        <NavLink id="a" href="archivos">
          Archivos
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink id="b" href="publicaciones">
          Publicaciones
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default ListEvi;
