import './App.css'
import { JsonRender } from './common/JsonRender/JsonRender'
import jsonData from './data/demoData.json'

function App() {

  return (
    <div className="mainContainer">
      <JsonRender data={jsonData as unknown} depth={0}/>
    </div>
  )
}

export default App
