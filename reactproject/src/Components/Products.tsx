import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    const isDeleted = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (isDeleted) {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts((prev) =>
        prev?.filter((p) => (p.id || (p as any)._id) !== id),
      );
      alert("Product deleted successfully");
      navigate("/products");
    }
  };
  const handleEdit = async (id: string) => {
    navigate(`/updateprod/${id}`);
  };
  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "300px", marginTop: "80px", padding: "20px" }}
        className="content"
      >
        <center>
          {" "}
          <h1 style={{ color: "#1C4D8D" }}>Products</h1>
        </center>
        <Link
          to="/addprod"
          className="btn btn-primary"
          style={{ float: "right" }}
        >
          Add Product
        </Link>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "100px",
          }}
        >
          {products?.map((p) => (
            <div
              className="card mt-5"
              style={{
                width: "22rem",
                height: "20rem",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex justify-content-center align-items-center mt-3">
                <img
                  src={`http://localhost:3000/uploads/${p.image}`}
                  style={{
                    height: "180px",
                    width: "300px",
                    alignContent: "center",
                    borderRadius: "5px",
                  }}
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#1C4D8D" }}>
                  {p.title}
                </h5>
                <p className="card-text" style={{ color: "#1C4D8D" }}>
                  Rs.{p.price}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  {/* <button className="btn btn-primary">View</button> */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-eye ms-3 text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg> */}
                  {/* <button className="btn btn-success ms-2">Edit</button> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    onClick={() => handleEdit(p.id || (p as any)._id)}
                    className="bi bi-pencil-square ms-3 text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  {/* <button className="btn btn-danger ms-2"  onClick={() => handleDelete(p.id || (p as any)._id)}>Delete</button> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    onClick={() => handleDelete(p.id || (p as any)._id)}
                    fill="currentColor"
                    className="bi bi-trash-fill ms-3 text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
