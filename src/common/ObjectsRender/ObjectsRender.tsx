import React from "react"
import { JsonRender } from "../JsonRender/JsonRender"

import { ObjectComponentProps } from "../../interfaces"

import "./ObjectsRender.css"

export const ObjectsRender: React.FC<ObjectComponentProps> = ({
  data,
  depth,
}) => {
  return (
    <span>
      {depth === 0 ? "" : "{"}
      <br />
      {Object.entries(data).map(([key, value], index) => (
        <span key={key} style={{ paddingLeft: `${depth * 1.2}em` }}>
          <span
            className={Array.isArray(data) ? "" : "elementClick"}
          >
            {key}:
          </span>
          <JsonRender data={value} depth={depth + 1} />
          {index < Object.entries(data).length - 1 ? "," : ""}
          <br />
        </span>
      ))}
      <span style={{ paddingLeft: `${depth * 0.7}em` }}>
        {depth === 0 ? "" : "}"}
      </span>
    </span>
  )
}
