import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props: any) => {
    return <header className={s.header}>
        <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-gradient-geometry-lion-cartoon-silhouette-png-image_4163663.jpg"
            alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;