import React from 'react';

const ProductCard = ({ category, description, id, image, price, title, rating }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;