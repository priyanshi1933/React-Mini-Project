import React from 'react'
import Sidebar from './Sidebar'


const Reports = () => {
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '300px', marginTop: '70px', padding: '20px' }} className='content'>
                <h1 style={{ color: '#1C4D8D' }} >Reports</h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '20px',
                        marginTop: '20px',
                    }}
                >
                    <div className="card p-3 shadow-sm">
                        <h6 className="text-muted">Total Sales</h6>
                        <h3 className="fw-bold">$28,450</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 className="text-muted">Completed Orders</h6>
                        <h3 className="fw-bold">620</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 className="text-muted">Pending Orders</h6>
                        <h3 className="fw-bold">140</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 className="text-muted">Refund Requests</h6>
                        <h3 className="fw-bold">32</h3>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Reports