import React from 'react'
import "./navBar.scss";
import { CartWidget } from "../CartWidget/cartWidget";
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className="navBar">

      <Link to='/'><p>Logo</p></Link>


      <ul>
        <NavLink to='/categories/Dulce'>
          <li className="navBarItem" href=" ">Dulce</li>
        </NavLink>

        <NavLink to='/categories/Salado' >
          <li className="navBarItem" href=" ">Salado</li>
        </NavLink>

        <NavLink to='/categories/Bebida' >
          <li className="navBarItem" href=" ">Bebida</li>
        </NavLink>

      </ul>

      <div>
        <CartWidget />
      </div>
    </div >

  );
};
