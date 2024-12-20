import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import ViewDashBoard from './components/ViewDashBoard';
import UpdateDashBoard from './components/UpdateDashBoard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/form',
    element: (
      <>
        <Nav />
        <Form />
      </>
    ),
  },
  {
    path: '/table',
    element: (
      <>
        <Nav />
        <Table />
      </>
    ),
  },
  {
    path: '/updateDashBoard',
    element: (
      <>
        <Nav />
        <UpdateDashBoard />
      </>
    ),
  },
  {
    path: '/ViewDashBoard',
    element: (
      <>
        <Nav />
        <ViewDashBoard />
      </>
    ),
  },
]);
function App() {
  return (
    <div className="flex items-center justify-center">
      {/* <Form/> */}
      {/* <Table/> */}
      {/* <ViewDashBoard/> */}
      {/* <UpdateDashBoard/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
