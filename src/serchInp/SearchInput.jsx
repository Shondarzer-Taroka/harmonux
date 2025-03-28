import React, { useState } from 'react';


const categories = ["electronics", "jewelry", "men's clothing", "women's clothing", "mouse"];

const SearchInput = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
    );
};

export default SearchInput;