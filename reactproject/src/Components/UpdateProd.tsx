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
      <div
        className="content"
        style={{
          marginTop: "150px",
          padding: "20px",
          // This ensures the margin only exists on larger screens
          marginLeft: window.innerWidth > 768 ? "300px" : "0px",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <form method="post"  className="add shadow-sm bg-white rounded border" onSubmit={handleSubmit} style={{
                  width: "80%", 
                  margin: "0 auto", 
                  padding: "30px", 
                  maxWidth: "1100px", 
                }}>
                <center>
                  <h1 className="text-center mb-4"
                  style={{ color: "#1C4D8D", fontSize: "28px" }}>Edit Product</h1>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={title}
                      placeholder="Enter Title"
                      onChange={(e) => setTitle(e.target.value)}
                      className="form-control"
                    />
                    <div style={{ color: "red" }}>{msg.title}</div>
                    </div>
                    <div className="mb-3">
                    <input
                      type="number"
                      id="price"
                      value={price}
                      name="price"
                      onChange={(e) => setPrice(Number(e.target.value))}
                      placeholder="Enter Price"
                      className="form-control mt-3"
                    />
                    <div style={{ color: "red" }}>{msg.price}</div>
</div>
                    <div
                      className="mb-3"
                     
                    >
                      <label
                        htmlFor="image"
                        className="form-control"
                        style={{
                          cursor: "pointer",
                          backgroundColor: "#f8f9fa",
                          color: "#6c757d",
                        }}
                      >
                       
                        {imageName}
                      </label>
                      </div>
                      <div className="mb-3">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        className="mt-3 form-control"
                        onChange={handleImageChange}
                      
                      />
                    </div>
                    <div style={{ color: "red" }}>{msg.image}</div>
                    <button
                  type="submit"
                  className="btn w-100 mt-2"
                  style={{
                    background: "#1C4D8D",
                    color: "white",
                    height: "45px",
                    fontWeight: "bold",
                  }}
                >
                  Edit Product
                </button>
                 
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProd;
