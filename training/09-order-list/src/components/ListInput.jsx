import React, { useEffect, useState } from 'react';

const ListInput = ({ Item, SetAddItem, AddItemToList }) => {
  const [Error, setError] = useState('');

  useEffect(() => {
    console.log('My component is created');
  }, []);

  useEffect(() => {
    console.log(Item);
    // eslint-disable-next-line no-unused-expressions
  }, [Item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('min 3 character is required');
    AddItemToList();
  };

  return (
    <form className="w-1/2 mx-auto p-8 m-8 bg-gray-100 shadow flex flex-row" onSubmit={handleSubmit}>
      <div className="basis-1/2 mb-4">
        <label htmlFor="Item" className="block font-medium text-gray-700">
          Add a product to the list:
        </label>
        <input
          type="text"
          id="Item"
          name="Item"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={Item}
          onChange={(e) => SetAddItem(e.target.value)}
        />
        <div className="text-green-500">
          {Error ? 'The product must have a minimum of 3 characters' : ''}
        </div>
      </div>
      <div className='basis-1/4 mx-auto mt-4'>
        <button
          type="submit"
          className="px-2 py-2 font-medium text-white text-lg bg-blue-500 hover:bg-indigo-700 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default ListInput;
