import "./App.css";
import { useEffect, useState } from "react";
import { JsonRender } from "./common/JsonRender/JsonRender";
import jsonData from "./data/demoData.json";

import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useDispatch } from "react-redux";
import { clearKeyValue, setValue } from "./common/keyValueSlice";
import { JsonExplorer } from "./utils/JsonExplorer";
import { JsonSearchProps } from "./interfaces";

function App() {
  const { path, value } = useSelector((state: RootState) => state.keyValue);
  const [criteria, setCriteria] = useState<string>("");

  const params: JsonSearchProps = { data: jsonData, criteria: criteria };


  const dispatch = useDispatch();

  useEffect(() => {
    if (criteria === "") {
      dispatch(clearKeyValue());
    } else {

      const result = JsonExplorer(params)

      const valueToSet = result === "" ? "undefined" : result;

      dispatch(setValue(valueToSet))

    }
  }, [criteria]);

  return (
    <div className="mainContainer">
      <div className="answer">
        <h4>Property</h4>
        <input
          className="input"
          type="text"
          value={criteria || path || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCriteria(e.target.value)
          }
        />
        <div className="value">{value}</div>
      </div>
      <h4>Response</h4>
      <div className="jsonContainer">
        <JsonRender data={jsonData as unknown} depth={0} actualRoute="" />
      </div>
    </div>
  );
}

export default App;
