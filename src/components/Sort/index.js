import { useState, useEffect } from "react";

const Sort = ( {sortBrand, sortPrice, sortAscDesc, sortCategory} ) => {
    const [selected, setSelected] = useState('');

    const handleBrandChange = event => {
      console.log(event.target.value);
      setSelected(event.target.value);
      sortBrand(event.target.value);
    };

    const handlePriceChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        sortPrice(event.target.value);
    };

    const handleAscDescChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        sortAscDesc(event.target.value);
    }

    const handleCategoryChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        sortCategory(event.target.value);
    }
 
    return (
        <div className="container mx-auto flex flex-row justify-end ml-5 text-xs ">
            <div className="brand flex flex-row ml-5">
                <select value={selected} onChange={handleBrandChange} className="font-custom font-normal border border-gray-400 rounded p-2 cursor-pointer">
                    <option value="" disabled={true}>Brand</option>
                    <option value="All">All</option>
                    <option value="Vitra">Vitra</option>
                    <option value="Vitale">Vitale</option>
                    <option value="Denko">Denko</option>
                </select>
            </div>
            <div className="category flex flex-row ml-5">
                <select value={selected} onChange={handleCategoryChange} className="font-custom font-normal border border-gray-400 rounded p-2 cursor-pointer">
                    <option value="" disabled={true}>Category</option>
                    <option value="All">All</option>
                    <option value="Kuvet">Kuvet</option>
                    <option value="Batarya">Batarya</option>
                    <option value="Seramik">Seramik</option>
                </select>
            </div>
            <div className="price-interval flex flex-row ml-5">
                <select value={selected} onChange={handlePriceChange} className="font-custom font-normal border border-gray-400 rounded p-2 cursor-pointer">
                    <option value="" disabled={true}>Price</option>
                    <option value="All">All</option>
                    <option value="0-100">0-100</option>
                    <option value="101-250">101-250</option>
                    <option value="251-500">251-500</option>
                    <option value="500">500+</option>
                </select>
            </div>
            <div className="price flex flex-row ml-5">
                <select value={selected} onChange={handleAscDescChange} className="font-custom font-normal border border-gray-400 rounded p-2 cursor-pointer">
                    <option value="" disabled={true}>Sort</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;