import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(['adilnur', 'картошка', 'стул'])
  const [inputVal, setInputVal] = useState()

  const addItem = () => {
    setItems([...items, inputVal])
  }

  return (
    <>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
      <button onClick={addItem}>Change a item</button>
      <ol>
        {
          items.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ol>
    </>
  )
}

export default App
