import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

type Order = {
    order_id: string,
    total_price: number,
    status: string
}

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>();
    useEffect(() => {
        fetch('https://fake-store-api.mock.beeceptor.com/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '300px', marginTop: '80px', padding: '20px' }} className='content'>
            <center>   <h1 style={{ color: '#1C4D8D' }}>Total Orders</h1></center> 
                <table className="table table-primary table-striped table-bordered mt-4" >
                    <thead>
                        <tr>
                            <th scope="col"  style={{color:'#1C4D8D'}}>Order ID</th>
                            <th scope="col"  style={{color:'#1C4D8D'}}>Total Price</th>
                            <th scope="col"  style={{color:'#1C4D8D'}}>Status</th>
                        </tr>
                    </thead>
                    <tbody>



                        {orders?.map((o) => (
                            <tr>
                                <th scope="row">{o.order_id}</th>
                                <td>{o.total_price}</td>
                                <td>
                                    {o.status === "Shipped" && (
                                        <button className="btn btn-success">Shipped</button>
                                    )}

                                    {o.status === "Processing" && (
                                        <button className="btn btn-warning">Processing</button>
                                    )}


                                    {o.status === "Delivered" && (
                                        <button className="btn btn-primary">Delivered</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders