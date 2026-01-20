import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Sidebar = () => {

    return (
        <>
            <Nav />
            <div
                style={{
                    width: '300px',
                    backgroundColor: '#e5e7d5',
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
                    style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'20px' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-window-sidebar" viewBox="0 0 16 16">
                        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z" />
                    </svg>
                    <h3 style={{ textAlign: 'center' }}>Sidebar</h3></div>

                <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />

                <div
                    className="home bg-dark text-light"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'20px',height:'50px',borderRadius:'7px' }}
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
                        Home
                    </Link>
                </div>
                <div className='aboutus bg-dark text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px',height:'50px',borderRadius:'7px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person-fill ms-3" viewBox="0 0 16 16" >
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                    </svg>

                    <Link to="/about" className="nav-link" style={{ fontSize: '18px' }}>
                        About Us
                    </Link>

                </div>
                <div className='contactus bg-dark text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'20px',height:'50px',borderRadius:'7px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-inbound ms-3" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>

                    <Link to="/contact" className="nav-link" style={{ fontSize: '18px' }}>
                        Contact Us
                    </Link>

                </div>
                <div className='report bg-dark text-light' style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'20px',height:'50px',borderRadius:'7px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark ms-3" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                    </svg>

                    <Link to="/report" className="nav-link" style={{ fontSize: '18px' }}>
                        Reports
                    </Link>

                </div>
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