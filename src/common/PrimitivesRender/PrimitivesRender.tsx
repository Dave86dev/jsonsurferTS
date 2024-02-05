import React from 'react';

export const PrimitivesRender: React.FC<{ data: unknown }> = ({ data }) => {
  return <span>{String(data)}</span>;
};

