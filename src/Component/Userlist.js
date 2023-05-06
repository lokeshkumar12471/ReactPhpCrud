import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Userlist() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/reactphpcrud/api/user.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);
  return (
    <React.Fragment>
      <div className="container text-start">
        <div className="row">
          <div className="col-md-6">
            <h5>Userlist</h5>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Student_Name</th>
                  <th scope="col">Student_Email</th>
                  <th scope="col">Student_Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.student_name}</td>
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
                      <Link to="/edituser" className="btn btn-danger">
                        Delete
                      </Link>
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
