import Sidebar from "./Sidebar";
import chart from "../chart.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get(`http://localhost:3000/users`);
        setTotalUsers(user.data.totalUsers);
        const product = await axios.get(`http://localhost:3000/products`);
        setTotalProducts(product.data.totalProducts);
        const order = await axios.get(`http://localhost:3000/orders`);
        setTotalOrders(order.data.totalOrders);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Total Users", "Total Products", "Total Orders"],
    datasets: [
      {
        label: "StockPilot Data",
        data: [totalUsers, totalProducts, totalOrders],
        borderColor: "#1C4D8D",
        backgroundColor: "rgba(28, 77, 141, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "300px", marginTop: "70px", padding: "20px" }}
        className="content"
      >
        <h1 style={{ color: "#1C4D8D" }}>Dashboard</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div className="card p-3 shadow-sm">
            <h6 style={{ color: "#1C4D8D" }}>Total Users</h6>
            <h3 className="fw-bold">{totalUsers}</h3>
          </div>

          <div className="card p-3 shadow-sm">
            <h6 style={{ color: "#1C4D8D" }}>Total Products</h6>
            <h3 className="fw-bold">{totalProducts}</h3>
          </div>

          <div className="card p-3 shadow-sm">
            <h6 style={{ color: "#1C4D8D" }}>Total Orders</h6>
            <h3 className="fw-bold">{totalOrders}</h3>
          </div>

          {/* <div className="card p-3 shadow-sm">
                        <h6 style={{color:'#1C4D8D'}}>Refund Requests</h6>
                        <h3 className="fw-bold">32</h3>
                    </div> */}
        </div>

        <div
          className="card mt-5 p-3 shadow-sm"
          style={{ width: "100%", height: "440px" }}
        >
          <h5 className="mb-3" style={{ color: "#1C4D8D" }}>
            StockPilot Chart
          </h5>

          {/* <img src={chart} style={{width:'100%',maxWidth:'700px',height:'auto', margin:'auto',display:'block'}}/> */}
          <div style={{ height: "350px", width: "100%" }}>
            <Line
              data={data}
              options={{
                maintainAspectRatio: false,
                responsive: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
