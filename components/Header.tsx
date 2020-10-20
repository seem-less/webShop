import Nav from "./Nav";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";

const Header = () => {

    const [ cart, setCart ] = useContext( AppContext );
    return(
        <Nav/>
    )
};

export default Header;