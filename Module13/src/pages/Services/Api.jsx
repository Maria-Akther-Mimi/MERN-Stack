import React, { useEffect, useState } from 'react';
import Data from './Data';

const Api = () => {

    const [productlist, setProduct] = useState([]);

    useEffect(()=>{
        (async()=>{
            let result = await fetch("https://dummyjson.com/products");
            let json = await result.json();
            setProduct(json.products);
        })()
    }, [])

    return (
        <>
            <Data data={productlist}/>
        </>
    );
};

export default Api;