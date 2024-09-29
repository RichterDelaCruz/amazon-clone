import React from 'react';

function ProductCard({ product }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
            <h2>{product.title.length > 31 ? `${product.title.substring(0, 31)}..` : product.title}</h2>
            <h2>{product.category}</h2>
            <div className="flex justify-center items-center" >
                <img src={product.image} alt={product.title} className='w-[100px]' />
            </div>
            <p><strong>${product.price}</strong></p>
        </div>
    );
}

export default ProductCard;
