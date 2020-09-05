import Nav from "./Nav";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

const Header = () => {

    const [ cart, setCart ] = useContext( AppContext );
    console.warn('cart', cart);
    return(
        <div>
            <Nav/>
        </div>
    )
};

export default Header;