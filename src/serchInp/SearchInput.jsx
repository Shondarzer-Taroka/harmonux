import React, { useState } from 'react';


const categories = ["electronics", "jewelry", "men's clothing", "women's clothing", "mouse"];

const SearchInput = () => {
    const [search, setSearch] = useState('')
    console.log(search);


    const filterCategories = categories.filter((category, index) => category.toLowerCase().includes(search.toLowerCase()))
    console.log((filterCategories));

    return (
        <div>
            <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />


            <div>
                <div className='bg-white mt-3'>
   
                    {filterCategories.map((category, index) => <p key={index+8796} className='text-black  px-3 p-1 hover:bg-amber-200 '>{category}</p>)}
                </div>
            </div>

        </div>
    );
};

export default SearchInput;