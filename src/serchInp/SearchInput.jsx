import React, { useState } from 'react';


const categories = ["electronics", "jewelry", "men's clothing", "women's clothing", "mouse"];

const SearchInput = () => {
    const [search, setSearch] = useState('')
    console.log(search);


    const filterCategories = categories.filter((category, index) => category.toLowerCase().includes(search.toLowerCase()))
    console.log((filterCategories));


    const highlightText = (text) => {
        const regex = new RegExp(`${search}`, 'gi')
        return text.replace(regex, (match) => `<strong>${match}</strong>`)
    }

    return (
        <div>
            <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />


            <div>
                {search && filterCategories.length > 0 && (
                    <div className='bg-white mt-3'>
                        {filterCategories.map((category, index) =>
                            <p
                                key={category}
                                className='text-black  px-3 p-1 hover:bg-amber-200 '
                                dangerouslySetInnerHTML={{ __html: highlightText(category) }}
                            />
                        )}
                    </div>
                )}
            </div>

        </div>
    );
};

export default SearchInput;