import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../assets/style/StyleMenu";

const Menu = () => {
  let isLogado = window.localStorage.getItem("isLogado");

  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/agendaeeventos">Agenda & Eventos</Link>
          </li>
          <li>
            <Link to="/comunidades">Comunidade</Link>
          </li>
          <li>
            {isLogado ? (
              <Link to="/perfil">Perfil</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </Nav>
    </>
  );
};
export default Menu;
