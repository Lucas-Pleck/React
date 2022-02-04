import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ListInput from './components/ListInput';

const App = () => {
  const [Item, SetAddItem] = useState('');
  const [CurrentProductList, SetProductList] = useState([]);
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    console.log(Item, isPresent);
    // eslint-disable-next-line no-unused-expressions
    Item() === 'easteregg' ? setIsPresent(true) : setIsPresent(false);
  }, [Item, isPresent]);

  useEffect(() => {
    console.log('Component created');
  }, []);

  const addProduct = () => {
    if (Item.length >= 3) {
      const message = 'Product must have a minimum of 3 characters';
    }
    console.log(Item);
    SetProductList([...CurrentProductList, Item]);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <header>
        <div>
          <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
              <ListInput
                AddItem={Item}
                SetAddItem={SetAddItem}
                AddItemToList={addProduct}
              />
              <ProductList items={CurrentProductList} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
