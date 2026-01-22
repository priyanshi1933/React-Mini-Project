import { useState } from 'react'

import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import { Route , Routes} from 'react-router-dom'
import Reports from './Components/Reports'
import Users from './Components/Users'
import Orders from './Components/Orders'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Dashboard/>}></Route>
           <Route path='/products' element={<Products/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          {/* <Route path='/report' element={<Reports/>}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
