import React, { useState, useRef } from 'react';
import './ToDoComponent.css';
import Item from '../Item/Item';
import SimpleButton from '../SimpleButton/SimpleButton';
import List from '../List/List';

function ToDoComponent() {
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  const [storage, setStorage] = useState([]);
  const refValue = useRef('');

  const handleClick = (e) => {
    e.preventDefault();
    if (refValue.current.value === '') {
      setError('Please enter your name in the author field');
      return;
    }
    if (text === '') {
      setError('Please type something in the note field');
      return;
    }
    const newItem = `${text} - author: ${refValue.current.value}`;
    setStorage([...storage, newItem]);
    setText('');
    setError(false);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div
          css={`
            display: flex;
          `}
        >
          <form>
            {error ? <p>{error}</p> : null}
            <div class="input_form">
              <label for="author">Author</label>
              <input id="author" type="text" ref={refValue} />
              <label for="note">Note</label>
              <Item id="note" text={text} setText={setText} />
              <SimpleButton handleClick={handleClick}>Enter</SimpleButton>
            </div>
          </form>
          <List data={storage} />
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;
