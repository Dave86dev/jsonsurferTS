import React from 'react';
import { JsonRender } from '../JsonRender/JsonRender'

export const ArraysRender: React.FC<{ data: unknown[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}><JsonRender data={item} /></li>
      ))}
    </ul>
  );
};

