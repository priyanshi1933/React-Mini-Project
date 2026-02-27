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
  const LIMIT = 6;
  const [products, setProducts] = useState<Product[]>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const [product, setProduct] = useState<any>(null);
  // const [qty, setQty] = useState<number>(1);
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    loadData();
  }, [page, search, sort]);

  const loadData = async () => {
    const res = await axios.get(
      `http://localhost:3000/products?page=${page}&limit=${LIMIT}&search=${search}&sort=${sort}`,
    );
    setProducts(res.data.data);
    setTotalPages(res.data.totalPages);
  };

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
  const addToCart = (product: any) => {
    const existing = cart.find((item) => item._id == product._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const increaseQty = (id: string) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQty = (id: string) => {
    setCart(
      cart.map((item) =>
        item._id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };
  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item._id !== id));
  };
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "300px", marginTop: "80px", padding: "20px" }}
        className="content"
      >
        <form className="d-flex justify-content-between w-100" role="search">
          <input
            className="form-control me-2"
            style={{ width: "400px" }}
            type="search"
            placeholder="Search Products..."
            aria-label="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
       
       
          <select
            className="form-select"
            style={{float:'right',width:'400px'}}
            value={sort}
            onChange={(e)=>{setSort(e.target.value);setPage(1);}}
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price : Low to High</option>
            <option value="price_desc">Price : High to Low</option>
            <option value="title_asc">Title : A-Z</option>
            <option value="title_desc">Title : Z-A</option>
          </select>
         </form>
        <center>
          <h1 style={{ color: "#1C4D8D" }} className="mt-3">Products</h1>
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
              key={p.id || (p as any)._id}
              className="card mt-5 ms-4"
              style={{
                width: "22rem",
                height: "23rem",
                alignItems: "center",
                borderRadius: "20px",
                background: "#afc9ec",
              }}
            >
              <div className="d-flex justify-content-center align-items-center mt-3">
                <img
                  src={`http://localhost:3000/uploads/${p.image}`}
                  crossOrigin="anonymous"
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
                <h5 className="card-title" style={{ color: "#0F2854" }}>
                  {p.title}
                </h5>
                <p className="card-text" style={{ color: "#0F2854" }}>
                  Rs.{p.price}
                </p>
                <button
                  className="btn btn-primary"
                  style={{ width: "300px" }}
                  onClick={() => {
                    addToCart(p);
                  }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  Add To Cart
                </button>
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
                    className="bi bi-pencil-square ms-3 mt-2 text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
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
                    className="bi bi-trash-fill ms-3 mt-2  text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "600px" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <table className="table table-primary table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              {cart.length === 0 && <h6>No items in the cart</h6>}
              {cart.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <th>
                        <img
                          src={`http://localhost:3000/uploads/${item.image}`}
                          crossOrigin="anonymous"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary me-1 btn-sm"
                          onClick={() => decreaseQty(item._id)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn btn-outline-primary ms-1 btn-sm"
                          onClick={() => increaseQty(item._id)}
                        >
                          +
                        </button>
                      </td>
                      <td>{item.price * item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeItem(item._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>

            <h5 style={{ float: "right" }}>Grand Total:{grandTotal}</h5>
            <button
              className="btn btn-success mt-3"
              onClick={async () => {
                for (let item of cart) {
                  const token=localStorage.getItem("token");
                  await axios.post(`http://localhost:3000/orders`, {
                    productId: item._id,
                    quantity: item.quantity,
                  },{
                    headers:{
                      Authorization:`Bearear ${token}`
                    }
                  });
                }
                alert("Order placed successfully");
                setCart([]);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
        <div className="btn mt-5" style={{ float: "right" }}>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-primary mt-2"
          >
            Prev
          </button>
          <span className="ms-3 mt-5 " style={{ marginTop: "10px" }}>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="btn btn-primary mt-2 ms-3"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
