
import Sidebar from './Sidebar'
import chart from '../chart.jpg'


const Dashboard = () => {

  

    return (
        <>
            <Sidebar /> 
            <div style={{ marginLeft: '300px',marginTop:'70px', padding: '20px' }} className='content'>
                <h1 style={{color:'#1C4D8D'}} >Dashboard</h1>
                  <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '20px',
                        marginTop: '20px',
                    }}
                >
                    <div className="card p-3 shadow-sm">
                        <h6 style={{color:'#1C4D8D'}}>Total Sales</h6>
                        <h3 className="fw-bold">$28,450</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 style={{color:'#1C4D8D'}}>Completed Orders</h6>
                        <h3 className="fw-bold">620</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 style={{color:'#1C4D8D'}}>Pending Orders</h6>
                        <h3 className="fw-bold">140</h3>
                    </div>

                    <div className="card p-3 shadow-sm">
                        <h6 style={{color:'#1C4D8D'}}>Refund Requests</h6>
                        <h3 className="fw-bold">32</h3>
                    </div>
                </div>

                <div className="card mt-5 p-3 shadow-sm" style={{width:'100%',height:'440px'}}>
          <h5 className="mb-3" style={{color:'#1C4D8D'}}>User Growth</h5>

          <img src={chart} style={{width:'100%',maxWidth:'700px',height:'auto', margin:'auto',display:'block'}}/>
          
        </div>
            </div>
        </>
    )
}

export default Dashboard