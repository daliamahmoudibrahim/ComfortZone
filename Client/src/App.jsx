import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomeScreen from './Screens/Homescreen'
import ProductDesScreen from './Screens/ProductDesScreen'
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import LogIn from './Screens/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/books/:id" element={<ProductDesScreen />} />
        </Routes>
      </BrowserRouter>
      {/* <LogIn/> */}

      {/* <HomeScreen/> */}
    </>
  )
}

export default App
