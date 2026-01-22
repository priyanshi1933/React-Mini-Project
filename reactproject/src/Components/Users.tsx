import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'


type User = {
  id: string,
  name: string,
  email: string
}
const Users = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '300px', marginTop: '80px', padding: '20px' }} className='content'>
      <center>  <h1 style={{ color: '#1C4D8D' }}>Users Data</h1></center>
        <table className="table table-primary table-striped table-bordered mt-4" >
          <thead>
            <tr>
              <th scope="col"  style={{color:'#1C4D8D'}}>ID</th>
              <th scope="col"  style={{color:'#1C4D8D'}}>Name</th>
              <th scope="col"  style={{color:'#1C4D8D'}}>Email</th>
            </tr>
          </thead>
          <tbody>



            {users?.map((u) => (
              <tr>
                <th scope="row" >{u.id}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users