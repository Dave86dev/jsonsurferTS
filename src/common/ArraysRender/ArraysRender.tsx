import React from "react";
import { JsonRender } from "../JsonRender/JsonRender";

import { ArrayComponentProps } from "../../interfaces";

export const ArraysRender: React.FC<ArrayComponentProps> = ({
  data,
  depth,
}) => {
  return (
    <span>
      [<br />
      {data.map((item, index) => (
        <span key={index}>
          <span style={{ paddingLeft: `${depth * 1.2}em` }}>
            <JsonRender data={item} depth={depth + 1} />
          </span>
          {index < data.length - 1 ? "," : ""}
          <br />
        </span>
      ))}
      <span style={{ paddingLeft: `${depth - 1 * 1.2}em` }}>]</span>
    </span>
  );
};
