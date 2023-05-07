import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userlist() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const reqData = await fetch(
      "http://localhost/reactphpcrud/api/product.php"
    );
    const resData = await reqData.json();
    // console.log(resData);
    setUserData(resData);
  };
  const handleDelete = async (std_id) => {
    const res = await axios.delete(
      "http://localhost/reactphpcrud/api/user.php/" + std_id
    );
    setMessage(res.data.success);
    getUserData();
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
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.student_name}</td>
                    <td>{uData.student_email}</td>
                    <td>{uData.student_email}</td>
                    <td>
                      {uData.student_status === "1" ? "Active" : "Inactive"}
                    </td>
                    <td>
                      <Link
                        to={"/edituser/" + uData.std_id}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(uData.std_id)}
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
