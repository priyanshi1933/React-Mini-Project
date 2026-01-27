import  { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

type Product = {
    id: string,
    title: string,
    price: number,
    image: string
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '300px', marginTop: '80px', padding: '20px' }} className='content'>
                <center>  <h1 style={{ color: '#1C4D8D' }} >Products</h1></center>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '80px' }}>

                    {products?.map((p) => (
                        <div className="card mt-3" style={{ width: '22rem', height: '22rem', alignItems: 'center', borderRadius: '20px' }}>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <img src={p.image} style={{ height: '180px', width: '300px', alignContent: 'center', borderRadius: '5px' }} alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#1C4D8D' }}>{p.title}</h5>
                                <p className="card-text" style={{ color: '#1C4D8D' }}>Rs.{p.price}</p>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-success ms-2">Edit</button>
                                    <button className="btn btn-danger ms-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products