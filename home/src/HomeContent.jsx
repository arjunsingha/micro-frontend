import React, {useState, useEffect} from 'react';
import {getProducts, currency} from './products';
import {addToCart, useLoggedIn} from "cart/cart"
import { Link } from "react-router-dom";

const HomeContent = () => {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(setProducts);

    },[])
    return ( 
        <div className="my-10 grid grid-cols-4 gap-5">
            {products.map((product)=>(
                <div key={product.id}>
                    <img src={product.image} alt={product.name}/>
                    <div className="flex">
                        <div className="flex-grow font-bold">
                            <Link to={`/product/${product.id}`}>
                            <a>{product.name}</a>
                            </Link>
                        </div>
                        <div className="flex-end">{currency.format(product.price)}</div>
                    </div>
                    <div className="text-sm mt-4">{product.description}</div>
                    {loggedIn && (
                        <div className="text-right mt-2">
                            <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                            onClick={()=>addToCart(product.id)}
                            id={`addToCart_${product.id}`}>
                                Add To Cart
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
     );
}
 
export default HomeContent;