import React from 'react';

const Item = ({ number, setNumber }) => {
  const handleChange = e => {
    setNumber(e.target.value);
  };

  return (
    <>
      <input value={number} onChange={handleChange} />
    </>
  );
};

export default Item;
