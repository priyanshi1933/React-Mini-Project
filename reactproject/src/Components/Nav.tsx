
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Nav = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#1C4D8D' }}>
  <div className="container-fluid">
    <img src={logo} style={{height:'50px',width:'50px'}}/>
    <a className="navbar-brand ms-3" href="#" style={{color:'white',fontSize:'30px'}}>StockPilot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard" style={{color:'white',fontSize:'20px'}}>Dashboard</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products" style={{color:'white',fontSize:'20px'}}>Products</Link>
        </li> */}
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" style={{color:'white',fontSize:'20px'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/addprod" style={{color:'black',background: 'white',fontSize:'20px'}}>Add Product</Link></li>
            <li><Link className="dropdown-item" to="/products" style={{color:'black',background: 'white',fontSize:'20px'}}>Display Product</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/users" style={{color:'white',fontSize:'20px'}}>Users</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/orders" style={{color:'white',fontSize:'20px'}}>Orders</Link>
        </li>
         {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/report" style={{color:'white',fontSize:'20px'}}>Reports</Link>
        </li> */}
       </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Nav