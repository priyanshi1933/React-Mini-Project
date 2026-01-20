import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import { Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Reports from './Components/Reports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/report' element={<Reports/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
