import './App.css'
import { JsonRender } from './common/JsonRender/JsonRender'
import jsonData from './data/demoData.json'

function App() {

  return (
    <>
      <>Let's code like numero uno</>
      <JsonRender data={jsonData as unknown}/>
    </>
  )
}

export default App
