import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

type User = {
  id: string,
  name: string,
  email: string
}
const Users = () => {
  const LIMIT=5;
  const [users, setUsers] = useState<User[]>();
  const[page,setPage]=useState(1);
  const[totalPages,setTotalPages]=useState(1);

  const loadData=async()=>{
    const res=await axios.get(`http://localhost:3000/users?page=${page}&limit=${LIMIT}`)
    setUsers(res.data.data);
    setTotalPages(res.data.totalPages);
  }
  useEffect(() => {
    loadData();
  }, [page])
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '300px', marginTop: '80px', padding: '20px' }} className='content'>
      <center>  <h1 style={{ color: '#1C4D8D' }}>Users Data</h1></center>
        <table className="table table-primary table-striped table-bordered mt-4" >
          <thead>
            <tr>
              <th scope="col-lg-6"  style={{color:'#1C4D8D'}}>Name</th>
              <th scope="col-lg-6"  style={{color:'#1C4D8D'}}>Email</th>
            </tr>
          </thead>
          <tbody>



            {users?.map((u) => (
              <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='btn' style={{float:'right'}}>
       <button className='btn btn-primary' disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
       <span className='ms-3'>Page {page} of {totalPages}</span>
       <button className='btn btn-primary ms-3' disabled={page===totalPages} onClick={()=>setPage(page+1)}>Next</button>
       </div>
      </div>
    </>
  )
}

export default Users