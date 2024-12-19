import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center'>
      <Form/>
    </div>
  )
}

export default App
