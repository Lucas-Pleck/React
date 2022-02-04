import React from 'react';
import Product from './Product';

const ProductList = ({ items }) => (
  <>
    {items.map((u, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Product key={index} product={u} />
    ))}
  </>
);

export default ProductList;
