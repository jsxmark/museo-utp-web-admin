import '../../styles/login.css';
import { Link } from "react-router-dom"

function MenuNavBar() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"} >Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"} >Registro</Link>
                    </li>
                    <li>
                        <Link to={"/home"} >Homepage</Link>
                    </li>
                </ul>
            </nav>
        </div>
        );
}

export default MenuNavBar
