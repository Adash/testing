import React, { useEffect } from 'react';

const Item = ({ text, setText, change, resetChange }) => {
  const handleChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (change === true) {
      setText('');
      resetChange(false);
    }
  }, [change, setText, resetChange]);

  return (
    <>
      <input value={text} onChange={handleChange} />
    </>
  );
};

export default Item;
