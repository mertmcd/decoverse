
import React, { useState, useEffect } from 'react';
// import local json file
import jsonData from '../../product-list.json'


const HighlightedProducts = () => {
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(data => setProducts(data))
        //     .
        //     console.log(jsonData)
        setCategory(jsonData.CategoryEntity);
        setProducts(jsonData.ProductEntity);
    }, []);
    return (
        <div className='text-center'>
            <div className='font-custom font-bolder text-xl mt-10 mb-10'>
                <h3>Highlighted Products</h3>
            </div>
            <div className="highlighted-products grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2">
                {products.slice(0, 4).map((product) => (
                    <div className="highlighted-product place-self-center mt-5 ml-2 mr-2 mb-5 rounded border border-zinc-300" key={product.Id}>
                        <img className="cursor-pointer p-5 object-scale-down h-48 w-96 mb-1" src={product.ProductUrl} alt={product.title} />
                        <p className='text-sm mb-1'>{product.ProductBrand}</p><br></br>
                        <p className='font-bolder mb-1'>{product.ProductName}</p>
                        <p className='mb-1'>{product.ProductPrice} TL</p>
                        <button className='bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4'> Add to Cart </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HighlightedProducts;