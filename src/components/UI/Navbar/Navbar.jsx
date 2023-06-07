import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>Logout</MyButton>
            <div className="navbar__links">
                <span><Link to="/about">About site</Link></span>
                <span><Link to="/posts">Posts</Link></span>
            </div>
        </div>
    );
};

export default Navbar;