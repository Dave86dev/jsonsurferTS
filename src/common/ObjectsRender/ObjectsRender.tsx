import React from "react";
import { JsonRender } from "../JsonRender/JsonRender";
import { ObjectComponentProps } from "../../interfaces";
import "./ObjectsRender.css";

//RDX
import { useDispatch } from "react-redux";
import { setKeyValue } from "../keyValueSlice";

export const ObjectsRender: React.FC<ObjectComponentProps> = ({
  data,
  depth,
  actualRoute,
}) => {
  //const value = useSelector((state: RootState) => state.value.value);
  const dispatch = useDispatch();

  const clickHandler = (path: string, value: string) => {
    // Adjust types as needed
    dispatch(setKeyValue({ path, value }));
  };

  return (
    <span>
      {depth === 0 ? "" : "{"}
      <br />
      {Object.entries(data).map(([key, value], index) => {
        const newPath = actualRoute ? `${actualRoute}.${key}` : key
        return (
          <span key={key} style={{ paddingLeft: `${depth * 1.2}em` }}>
            <span
              className={Array.isArray(value) ? "" : "elementClick"}
              onClick={() =>
                (typeof value !== "object" || value === null) &&
                clickHandler(newPath, String(value))
              }
            >
              {key}:
            </span>
            <JsonRender 
              data={value} 
              depth={depth + 1} 
              actualRoute={newPath}
            />
            {index < Object.entries(data).length - 1 ? "," : ""}
            <br />
          </span>
        );
      })}
      <span style={{ paddingLeft: `${depth * 0.7}em` }}>
        {depth === 0 ? "" : "}"}
      </span>
    </span>
  );
};
