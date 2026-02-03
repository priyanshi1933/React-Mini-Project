import axios from "axios";
import Sidebar from "./Sidebar";
import React, { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
interface IProduct {
  title: string;
  price: string;
}
const AddProd = () => {
  const [data, setData] = useState<IProduct>({
    title: "",
    price: "",
  });
  const [msg, setMsg] = useState({
    title: "",
    price: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setMsg((prev) => ({ ...prev, [name]: " " }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = { title: "", price: "" };
    let hasError = false;
    if (data.title == "") {
      validationErrors.title = "Please enter title";
      hasError = true;
    }
    if (data.price == "") {
      validationErrors.price = "Please enter price";
      hasError = true;
    }
    setMsg(validationErrors);
    if (hasError) return;
    try {
      await axios.post("http://localhost:3000/products", data);
      alert("Product created successfully");
      navigate("/products");
    } catch (error: any) {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "300px", marginTop: "70px", padding: "20px" }}
        className="content"
      ></div>
      <form method="post" className="add" onSubmit={handleSubmit}>
        <center>
          <h1 style={{ color: "#1C4D8D" }}>Add Product</h1>
          <div className="container mt-5">
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              placeholder="Enter Title"
              onChange={handleChange}
              className="form-control mt-3"
              style={{ width: "500px" }}
            />
            <div style={{ color: "red" }}>{msg.title}</div>
            <input
              type="number"
              id="price"
              value={data.price}
              name="price"
              onChange={handleChange}
              placeholder="Enter Price"
              className="form-control mt-3"
              style={{ width: "500px" }}
            />
            <div style={{ color: "red" }}>{msg.price}</div>
            <button
              type="submit"
              className="btn-lg mt-3"
              style={{
                width: "500px",
                height: "40px",
                background: "#1C4D8D",
                color: "white",
              }}
            >
              Add Product
            </button>
          </div>
        </center>
      </form>
    </>
  );
};

export default AddProd;
