import { useState } from 'react'
import './App.css'
import Form from './components/Form'

import Table from './components/Table'
import ViewDashBoard from './components/ViewDashBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center'>
      {/* <Form/> */}
      {/* <Table/> */}
      <ViewDashBoard/>
    </div>
  )
}

export default App
