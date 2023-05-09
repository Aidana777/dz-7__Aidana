import React from 'react';
import { useSelector } from "react-redux";
import { busSelect } from "../redux/busketSlice";

const Busket = () => {
    const { busketArr } = useSelector(busSelect)


    return (
        <div className='busket'>
            {
                busketArr.map(product => <div className='cards'>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>)
            }
        </div>
    );
};

export default Busket;