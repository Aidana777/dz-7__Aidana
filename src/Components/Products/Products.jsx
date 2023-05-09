import React from 'react';
import { useDispatch, } from "react-redux";
import { setBus } from "../../redux/busketSlice";


const Products = ({ product }) => {
    const dispatch = useDispatch()

    const addToBasket = () => dispatch(setBus(product))

    return (
        <div >
            <div className='cards'>
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button className='btn' onClick={addToBasket}>addToBusket</button>
            </div>
        </div>
    );
};

export default Products;