import React, { useState } from 'react';
import Input from './Input';
import PurchaseList from './PurchaseList';

const PurchaseApp = () => (
  <div>
    <div>
      <Input />
      <Button />
    </div>
    <PurchaseList items={productList} />;
  </div>
);

export default PurchaseApp;
