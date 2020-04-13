import React, { useState, useRef } from 'react';
import './ToDoComponent.css';
import Item from '../Item/Item';
import SimpleButton from '../SimpleButton/SimpleButton';
import List from '../List/List';

function ToDoComponent() {
  const [text, setText] = useState('');
  const [storage, setStorage] = useState([]);
  const refValue = useRef('hellos');

  const handleClick = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    const newItem = `${text} - author: ${refValue.current.value}`;
    setStorage([...storage, newItem]);
    setText('');
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
