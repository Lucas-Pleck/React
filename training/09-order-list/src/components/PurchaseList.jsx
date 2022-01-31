import React from 'react';
import PurchaseItem from './PurchaseItem';

const [productList, setProductList] = useState([]);
const PurchaseList = ({ items }) => (
  <>
    {items.map((u) => (
      <div key={u.id} name={u.name} />
    ))}
  </>
);
export default PurchaseList;
