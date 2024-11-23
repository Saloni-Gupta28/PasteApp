import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home';
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div className='w-full h-full flex flex-col'>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element:
        <div className='w-full h-full flex flex-col'>
          <Navbar />
          <Paste />
        </div>
    },
    {
      path: "/pastes/:id",
      element:
        <div className='w-full h-full flrx flex-col'>
          <Navbar />
          <ViewPaste />
        </div>
    },
  ]
);


function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
