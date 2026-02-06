


import { Route , Routes, useNavigate} from 'react-router-dom'

import Users from './Components/Users'
import Orders from './Components/Orders'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'
import Registration from './Components/Registration'
import Login from './Components/Login'
import AddProd from './Components/AddProd'
import UpdateProd from './Components/UpdateProd'
import Admin from './Components/Admin'
import { getToken } from './Utils/auth'
import { useEffect } from 'react'
function App() {
  
  const navigate=useNavigate();
useEffect(()=>{
  const token=getToken();
  if(!token){
    navigate('/login');
  }

})

  return (
    <>
      <Routes>
        <Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/addprod' element={<AddProd/>}></Route>
           <Route path='/updateprod/:id' element={<UpdateProd/>}></Route>
           <Route path='/products' element={<Products/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          {/* <Route path='/report' element={<Reports/>}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
