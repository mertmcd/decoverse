import React, { useState, useEffect } from "react";
import Sort from "../../components/Sort";
import jsonData from '../../product-list.json'
import LazyLoad from 'react-lazyload';


const Products = () => {
    const [products, setProducts] = useState([]);

    const prodList = jsonData.ProductEntity;

    const sortBrand = (brandName) => {
        if(brandName === "All") setProducts(prodList);
        else {
            let filteredProducts = prodList.filter(product => product.ProductBrand === brandName);
            setProducts(filteredProducts);
        }
    };

    const sortCategory = (catName) => {
        if(catName === "All") setProducts(prodList);
        else {
            let filteredProducts = prodList.filter(product => product.ProductCategory === catName);
            setProducts(filteredProducts);
        }
    };

    const sortPrice = (priceVal) => {
        if(priceVal === "All") setProducts(prodList);
        else if (priceVal === "0-100") {
            let filteredProducts = prodList.filter(product => product.ProductPrice <= 100);
            setProducts(filteredProducts);
        }
        else if (priceVal === "101-250") {
            let filteredProducts = prodList.filter(product => product.ProductPrice <= 250 && product.ProductPrice > 100);
            setProducts(filteredProducts);

        }
        else if (priceVal === "251-500") {
            let filteredProducts = prodList.filter(product => product.ProductPrice <= 500 && product.ProductPrice > 250);
            setProducts(filteredProducts);

        } else{
            let filteredProducts = prodList.filter(product => product.ProductPrice > 500);
            setProducts(filteredProducts);
        }
    };

    const sortAscDesc = (order) => {
        if(order === "low") {
            
            let filteredProducts = prodList.sort((a, b) => a.ProductPrice - b.ProductPrice);
            let sortedProducts = filteredProducts.slice(0, prodList.length)
            setProducts(sortedProducts);
           
        } else {
            let filteredProducts = prodList.sort((a, b) => b.ProductPrice - a.ProductPrice);
            let sortedProducts = filteredProducts.slice(0, prodList.length)
            setProducts(sortedProducts);
            

        }
    }

    useEffect(() => {
        //setCategory(jsonData.CategoryEntity);
        setProducts(jsonData.ProductEntity);
    }, []);

    
    return (
        <div className="container mx-auto text-center">
            <h3 className="font-custom font-bolder mt-10 mb-10 text-xl">Products ({products.length})</h3>
            <div className="flex flex-row justify-end mb-10 bg-gray-200 rounded p-4">
                <Sort
                sortBrand={sortBrand}
                sortPrice={sortPrice}
                sortAscDesc={sortAscDesc}
                sortCategory={sortCategory}
                />
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => {
                return (
                    
                    <div className="product place-self-center" key={product.Id}>
                        <LazyLoad><img className="object-scale-down max-w-full h-48 w-96 mb-1" src={product.ProductUrl} alt={product.title} /></LazyLoad>
                        <p className='text-sm mb-1'>{product.ProductBrand}</p><br></br>
                        <p className='font-bolder mb-1'>{product.ProductName}</p>
                        <p className="mb-1">{product.ProductPrice} TL</p>
                        <button className='bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4'> Add to Cart </button>
                    </div>
                )
            }
            )}
            </div>
        </div>
    );
    };

    export default Products;