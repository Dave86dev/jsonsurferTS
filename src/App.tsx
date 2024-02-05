import './App.css'
import { JsonRender } from './common/JsonRender/JsonRender'
import jsonData from './data/demoData.json'

function App() {

  return (
    <>
      <JsonRender data={jsonData as unknown} depth={0}/>
    </>
  )
}

export default App
