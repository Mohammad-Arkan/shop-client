import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShopPage = () => {
    const shopData = useLoaderData()
    return (
        <div>
            <h2>Shop data : {shopData.length}</h2>
        </div>
    );
};

export default ShopPage;