import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  setError('You have errors in your form!');
};

const Input = () => {
  <form onSubmit={handleSubmit} />;
};

export default Input;
