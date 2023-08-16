import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
      <div className="navBar">
        <Link to={"/"}>Home</Link>
        <Link to={"/contatos"}>Contatos</Link>
        <Link to={"/produtos"}>Produtos</Link>
      </div>
    );
   }
   export default NavBar