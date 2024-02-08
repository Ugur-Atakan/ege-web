// AttachmentList.js
import React from 'react';
import ProductItem from './ProductItem';

const Products = ({ products, companyID }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
      {products.map((product, index) => (
        <ProductItem key={index} {...product} companyID={companyID} />
      ))}
    </ul>
  );
};

export default Products;
