import "./App.css";
import { JsonRender } from "./common/JsonRender/JsonRender";
import jsonData from "./data/demoData.json";

import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useEffect } from "react";

function App() {
  const { key, value } = useSelector((state: RootState) => state.keyValue);

  useEffect(() => {
    console.log(key, value);
  }, [value]);

  return (
    <div className="mainContainer">
      <div className="jsonContainer">
        <JsonRender data={jsonData as unknown} depth={0} />
      </div>
    </div>
  );
}

export default App;
