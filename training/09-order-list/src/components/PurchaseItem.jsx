import React, { useState } from 'react';

const PurchaseItem = () => {
  const [name, setName] = useState([]);

  return (
    <div>
      <button
        onClick={() => setNames((name) => name.filter((_, i) => i !== name.length - 1))}>
        delete
      </button>
      <div>{name.join(', ')}</div>
    </div>
  );
};
export default PurchaseItem;
