import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import ViewDashBoard from './components/ViewDashBoard'
import UpdateDashBoard from './components/UpdateDashBoard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/form",
    element:<Form/>
  },
  {
    path:"/table",
    element:<Table/>
  },
  {
    path:"/updateDashBoard",
    element:<UpdateDashBoard/>
  },
  {
    path:"/ViewDashBoard",
    element:<ViewDashBoard/>
  },

])
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center'>
      {/* <Form/> */}
      {/* <Table/> */}
      {/* <ViewDashBoard/> */}
      {/* <UpdateDashBoard/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
