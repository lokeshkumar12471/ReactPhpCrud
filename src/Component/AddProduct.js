import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addproduct() {
  const [ptitle, setPtitle] = useState("");
  const [pprice, setPprice] = useState("");
  const [pfile, setPfile] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append("ptitle", ptitle);
    formData.append("pprice", pprice);
    formData.append("pfile", pfile);
    const response = await axios.post(
      "http://localhost/reactphpcrud/api/product.php",
      formData,
      {
        headers: { "Content-Type": "multipart/formData" },
      }
    );
    if (response.data.success) {
      setMessage(response.data.success);
      setTimeout(() => {
        navigate("/productlist");
      }, 2000);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5 className="mb-4">Add Product</h5>
            <p className="text-sucess"> {message}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2">Product Title</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="ptitle"
                    className="form-control"
                    onChange={(e) => setPtitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Product Price</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="pprice"
                    className="form-control"
                    onChange={(e) => setPprice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2">Product Image</label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    name="pfile"
                    className="form-control"
                    onChange={(e) => setPfile(e.target.files[0])}
                  />
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
export default Addproduct;
