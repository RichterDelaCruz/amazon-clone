import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Assuming it's in the same folder

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <div className="flex flex-wrap justify-between">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Products;
