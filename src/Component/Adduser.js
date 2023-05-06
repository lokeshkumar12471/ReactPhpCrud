import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState({
    student_name: "",
    student_email: "",
    student_status: "",
  });
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formvalue);
    const formData = {
      student_name: formvalue.student_name,
      student_email: formvalue.student_email,
      student_status: formvalue.student_status,
    };
    const res = await axios.post(
      "http://localhost/reactphpcrud/api/user.php",
      formData
    );
    //let jsonres= res.data.json();
    if (res.data.success) {
      setMessage(res.data.success);
      setTimeout(() => {
        navigate("/userlist");
      }, 2000);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5 className="mb-4">Adduser </h5>
            <p className="text-sucess"> {message}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2">Username</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="student_name"
                    value={formvalue.student_name}
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="student_email"
                    value={formvalue.student_email}
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2">Status</label>
                <div className="col-sm-10">
                  <select
                    name="student_status"
                    className="form-control"
                    value={formvalue.student_status}
                    onChange={handleInput}
                  >
                    <option value="">--Select Status--</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                  <button name="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Adduser;
