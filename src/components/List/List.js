import React from 'react';
import 'styled-components/macro';

const Element = ({ children }) => (
  <li
    css={`
      color: gray;
    `}
  >
    {children}
  </li>
);

const List = ({ data }) => {
  return (
    <ul
      css={`
        list-style: none;
        margin: 1px;
        padding-inline-start: 0px;
        margin-top: 5px;
      `}
    >
      {Array.isArray(data) ? (
        data.map(item => <Element key={item}>{item}</Element>)
      ) : (
        <Element>No Data</Element>
      )}
    </ul>
  );
};

export default List;
