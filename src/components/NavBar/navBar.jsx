import React from 'react'
import "./navBar.scss";
import { CartWidget } from "../CartWidget/cartWidget";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'

export const NavBar = () => {

  return (
    <div className="navBar">

      <Link to='/'>
        <img className='logo' src={logo} alt="" />
      </Link>


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

      <div className='cart'>
        <CartWidget />
      </div>
    </div >

  );
};
