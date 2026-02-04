import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const UpdateProd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("No file chosen");
  const [msg, setMsg] = useState({
    title: "",
    price: "",
    image: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setImageName(res.data.image || "No file chosen");
      })
      .catch((err) => console.error("Error Fetching Record:", err));
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = { title: "", price: "", image: "" };
    let hasError = false;
    if (title == "") {
      validationErrors.title = "Please enter title";
      hasError = true;
    }
    if (price <= 0) {
      validationErrors.price = "Please enter valid price";
      hasError = true;
    }

    setMsg(validationErrors);
    if (hasError) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price.toString());
    if (image) formData.append("image", image);
    try {
      await axios.put(`http://localhost:3000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product Updated Successfully");
      navigate("/products");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "300px", marginTop: "70px", padding: "20px" }} className="content" ></div>
      <form method="post" className="add" onSubmit={handleSubmit}>
        <center>
          <h1 style={{ color: "#1C4D8D" }}>Edit Product</h1>
          <div className="container mt-5">
            <input type="text" id="title" name="title"  value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)}  className="form-control mt-3" style={{ width: "500px" }}/>
            <div style={{ color: "red" }}>{msg.title}</div>
            <input type="number" id="price" value={price} name="price" onChange={(e) => setPrice(Number(e.target.value))} placeholder="Enter Price"  className="form-control mt-3" style={{ width: "500px" }}/>
            <div style={{ color: "red" }}>{msg.price}</div>

    
            <div className="mt-3" style={{ width: "500px", textAlign: "left" }}>
              <label htmlFor="image" className="form-control" style={{ cursor: "pointer",backgroundColor: "#f8f9fa", color: "#6c757d",}}> {imageName}</label>
              <input type="file" id="image" name="image" onChange={handleImageChange} style={{ display: "none" }}/>
            </div>
            <div style={{ color: "red" }}>{msg.image}</div>
            <button type="submit" className="btn-lg mt-3" style={{  width: "500px",  height: "40px",  background: "#1C4D8D",  color: "white",}}>
              Edit Product
            </button>
          </div>
        </center>
      </form>
    </>
  );
};

export default UpdateProd;
