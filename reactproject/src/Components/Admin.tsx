
import { adminApi } from '../Api/auth'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Utils/auth'
const Admin = () => {
    const callAdminApi=async()=>{
        try{
            const res=await adminApi();
            alert(res.data.message);
        }catch(err:any){
            alert(err.response.data.message)
        }
    }
    const navigate=useNavigate();
    const logOut=()=>{
        logout();
        navigate('/login');
    }
  return (
    <>
    <Sidebar/>
    <div
        style={{ marginLeft: "300px", marginTop: "70px", padding: "20px" }}
        className="content"
      >
    <h1 style={{ color: "#1C4D8D" }}>Admin Page</h1>
    <button type='submit' className='btn btn-primary' onClick={callAdminApi}>Call Admin API</button>
    <button type='submit' className='btn btn-dark' onClick={logOut}>Logout</button> 
    </div>
    </>
  )
}

export default Admin