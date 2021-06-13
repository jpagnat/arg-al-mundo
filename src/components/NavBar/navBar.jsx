import "./navBar.scss";
import { CartWidget } from "../CartWidget/cartWidget";

export const NavBar = () => {
  return (
    <div className="navBar">

      <div>
        <p className="navBarItem" href=" ">HOME</p>
        <p className="navBarItem" href=" ">NOSOTROS</p>
        <p className="navBarItem" href=" ">TIENDA</p>
        <p className="navBarItem" href=" ">CONTACTO</p>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>

  );
};
