import React, { useState } from 'react';
import './ToDoComponent.css';
import Item from '../Item/Item';
import SimpleButton from '../SimpleButton/SimpleButton';
import List from '../List/List';

function ToDoComponent() {
  const [text, setText] = useState('');
  const [change, setChange] = useState(false);
  const [storage, setStorage] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setStorage([...storage, text]);
    setChange(true);
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
            <Item
              text={text}
              setText={setText}
              change={change}
              resetChange={setChange}
            />
            <SimpleButton handleClick={handleClick}>Enter</SimpleButton>
          </form>
          <List data={storage} />
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;
