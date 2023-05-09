import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { busSelect } from "../../redux/busketSlice";

const Header = () => {
    const { busketArr } = useSelector(busSelect)
    return (
        <div className='header'>
            <NavLink className='link' to={'/'}>
                <h2>Home</h2>
            </NavLink>
            <NavLink className='link' to={'/busket'}>
                <h2>Busket  {busketArr.length}</h2>
            </NavLink>
        </div>
    );
};

export default Header;