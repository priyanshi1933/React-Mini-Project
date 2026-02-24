import axios from "axios";
import Sidebar from "./Sidebar";
import React, { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
// interface IProduct {
//   title: string;
//   price: string;
//   image: string;
// }
const AddProd = () => {
  // const [data, setData] = useState<IProduct>({
  //   title: "",
  //   price: "",
  // });
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  // const [msg, setMsg] = useState({
  //   title: "",
  //   price: "",
  //   image: "",
  // });
  const navigate = useNavigate();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // let validationErrors = { title: "", price: "", image: "" };
    // let hasError = false;
    // if (title == "") {
    //   validationErrors.title = "Please enter title";
    //   hasError = true;
    // }
    // if (price <= 0) {
    //   validationErrors.price = "Please enter valid price";
    //   hasError = true;
    // }
    // if (!image) {
    //   validationErrors.image = "No image selected";
    //   hasError = true;
    // }
    // setMsg(validationErrors);
    // if (hasError) return;
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("price", price.toString());
    formdata.append("image", image as File);

    try {
      await axios.post("http://localhost:3000/products", formdata);
      alert("Product created successfully");
      navigate("/products");
    } catch (error: any) {
      console.error("Server Error:", error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <Sidebar />
      {/* <div
        style={{ marginLeft: "300px", marginTop: "70px", padding: "20px" }}
        className="content"
      ></div>
      <form method="post" className="add" onSubmit={handleSubmit}>
        <center>
          <h1 style={{ color: "#1C4D8D" }}>Add Product</h1>
          <div className="container mt-5">
            <input  type="text"  id="title"  name="title"  value={title}  placeholder="Enter Title"  onChange={handleTitleChange}  className="form-control mt-3"  style={{ width: "500px" }} />
          
            <input type="number" id="price" value={price}  name="price"  onChange={handlePriceChange}  placeholder="Enter Price"  className="form-control mt-3"   style={{ width: "500px" }}  />
           
            <input type="file" id="image" name="image"  onChange={handleImageChange} className="form-control mt-3" style={{ width: "500px" }}/>
          
            <button type="submit"  className="btn-lg mt-3" style={{ width: "500px", height: "40px", background: "#1C4D8D",  color: "white",  }} > Add Product</button>
          </div>
        </center>
      </form> */}
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
              <form
                method="post"
                className="add shadow-sm bg-white rounded border"
                onSubmit={handleSubmit}
                style={{
                  width: "80%", 
                  margin: "0 auto", 
                  padding: "30px", 
                  maxWidth: "1100px", 
                }}
              >
                <h1
                  className="text-center mb-4"
                  style={{ color: "#1C4D8D", fontSize: "28px" }}
                >
                  Add Product
                </h1>

                <div className="mb-3">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    placeholder="Enter Title"
                    onChange={handleTitleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    id="price"
                    value={price}
                    name="price"
                    onChange={handlePriceChange}
                    placeholder="Enter Price"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="form-control"
                  />
                </div>

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
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProd;
