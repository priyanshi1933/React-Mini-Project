import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000000' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:'white',fontSize:'30px'}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:'white',fontSize:'20px'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about" style={{color:'white',fontSize:'20px'}}>About Us</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contact" style={{color:'white',fontSize:'20px'}}>Contact Us</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/report" style={{color:'white',fontSize:'20px'}}>Reports</Link>
        </li>
       </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Nav