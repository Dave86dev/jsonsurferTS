import React from 'react';
import { JsonRender } from '../JsonRender/JsonRender'

import { ArrayComponentProps } from '../../interfaces';

export const ArraysRender: React.FC<ArrayComponentProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}><JsonRender data={item} /></li>
      ))}
    </ul>
  );
};

