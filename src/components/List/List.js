import React from 'react';
import 'styled-components/macro';

const List = ({ data }) => {
  return (
    <ul
      css={`
        list-style: none;
      `}
    >
      {Array.isArray(data) ? (
        data.map(item => <li>{item}</li>)
      ) : (
        <li>No Data</li>
      )}
    </ul>
  );
};

export default List;
