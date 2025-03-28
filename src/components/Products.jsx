import React from 'react';
import { useGetProductsQuery } from '../slices/productSlices';
import ProductCard from './ProductCard';

const Products = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery()
    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    console.log(products);

    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-7 mb-8'>Products</h1>
            <aside className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    products.map((card, index) => <ProductCard key={index+card.id} category={card.category} id={card.id} title={card.title} description={card.description} image={card.image} />)
                }
            </aside>
        </div>
    );
};

export default Products;