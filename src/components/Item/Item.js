import React from 'react';

const Item = ({ text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
    </>
  );
};

export default Item;
