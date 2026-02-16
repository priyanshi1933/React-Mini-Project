import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

type Order = {
  order_id: string;
  title: string;
  price: number;
  quantity: number;
  totalAmount: number;
};

const Orders = () => {
  const LIMIT = 5;
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(1);
  const [orders, setOrders] = useState<Order[]>();
  useEffect(() => {
    getOrder();
  }, [page]);
  const getOrder=async()=>{
    const res=await axios.get(`http://localhost:3000/orders?page=${page}&limit=${LIMIT}`)
    setOrders(res.data.data);
    setTotalPages(res.data.totalPages);
  }
  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "300px", marginTop: "80px", padding: "20px" }}
        className="content"
      >
        <center>
          {" "}
          <h1 style={{ color: "#1C4D8D" }}>Total Orders</h1>
        </center>
        <table className="table table-primary table-striped table-bordered mt-4">
          <thead>
            <tr>
              <th scope="col" style={{ color: "#1C4D8D" }}>
                Product Name
              </th>
              <th scope="col" style={{ color: "#1C4D8D" }}>
                Price
              </th>
              <th scope="col" style={{ color: "#1C4D8D" }}>
                Quantity
              </th>
              <th scope="col" style={{ color: "#1C4D8D" }}>
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((o:any) => (
              <tr>
                <td>{o.productId.title}</td>
                <td>{o.productId.price}</td>
                <td>{o.quantity}</td>
                <td>{o.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn">
            <button className="btn btn-primary" disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <span className="ms-3">Page {page} of {totalPages}</span>
            <button className="btn btn-primary ms-3" disabled={page===totalPages} onClick={()=>setPage(page+1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Orders;
