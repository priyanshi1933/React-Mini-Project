import React from 'react'
import Home from './Dashboard'
import { Link } from 'react-router-dom'
import Nav from './Nav'



const Sidebar = () => {

    return (
        <>
            <Nav />
            <div className='sidebar'
                style={{
                    width: '300px',
                    backgroundColor: '#0F2854',
                    height: '100vh',
                    padding: '10px',
                    position: 'fixed',
                    top: '71px',
                    left: 0,
                    boxSizing: 'border-box',
                }}
            >
                <div
                    className="home"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-window-sidebar text-light" viewBox="0 0 16 16">
                        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z" />
                    </svg>
                    <h3 style={{ textAlign: 'center' }} className='text-light'>StockPilot</h3></div>

                <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />

                <div
                    className="home text-light"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', height: '50px', borderRadius: '7px', background: '#1C4D8D' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true" className='ms-3'
                    >
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>

                    <Link to="/" className="nav-link" style={{ fontSize: '18px' }}>
                        Dashboard
                    </Link>
                </div>
                <div className='products text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', height: '50px', borderRadius: '7px', background: '#1C4D8D' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes ms-3" viewBox="0 0 16 16">
                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                    </svg>

                    <Link to="/products" className="nav-link" style={{ fontSize: '18px' }}>
                        Products
                    </Link>

                </div>
                <div className='aboutus text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', height: '50px', borderRadius: '7px', background: '#1C4D8D' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill ms-3" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>

                    <Link to="/users" className="nav-link" style={{ fontSize: '18px' }}>
                        Users
                    </Link>

                </div>
                <div className='contactus text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', height: '50px', borderRadius: '7px', background: '#1C4D8D' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-heart-fill ms-3" viewBox="0 0 16 16">
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg>

                    <Link to="/orders" className="nav-link" style={{ fontSize: '18px' }}>
                        Orders
                    </Link>

                </div>
                {/* <div className='report text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'20px',height:'50px',borderRadius:'7px',background:'#1C4D8D' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark ms-3" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                    </svg>

                    <Link to="/report" className="nav-link" style={{ fontSize: '18px' }}>
                        Reports
                    </Link>

                </div> */}
                {/* <div className="last"  style={{ 
                    marginTop: 'auto', // THIS PUSHES IT TO THE BOTTOM
                    padding: '20px 0',
                    borderTop: '1px solid #ccc',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    
                        <strong>Priyanshi Danecha</strong>
                    
                </div> */}
            </div>
        </>
    );
}

export default Sidebar