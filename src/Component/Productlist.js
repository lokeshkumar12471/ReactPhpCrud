import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userlist() {
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getProduct = () => {
      fetch("http://localhost/reactphpcrud/api/product.php")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
      //   const resData = await reqData.json();
      // console.log(resData);
      //   setUserData(resData);
    };
    getProduct();
  }, []);

  const handleDelete = async (std_id) => {
    const res = await axios.delete(
      "http://localhost/reactphpcrud/api/user.php/" + std_id
    );
    setMessage(res.data.success);
  };

  return (
    <React.Fragment>
      <div className="container text-start">
        <div className="row">
          <div className="col-md-6">
            <p className="text-danger">{message}</p>
            <h5>Userlist</h5>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Product_Title</th>
                  <th scope="col">Product_Price</th>
                  <th scope="col">Product_Image</th>
                  <th scope="col">Product_Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((pData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pData.ptitle}</td>
                    <td>{pData.pprice}</td>
                    {/* <td>{pData.p_title}</td> */}
                    <td>
                      <img
                        src={`http://localhost/reactphpcrud/productimages/${pData.pfile}`}
                        height="100px"
                        weight="100px"
                        alt="product images"
                      />
                    </td>
                    <td>{pData.pstatus === "1" ? "Active" : "Inactive"}</td>
                    <td>
                      <Link
                        to={"/edituser/" + pData.std_id}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(pData.std_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Userlist;
