import {useState} from "react";
import "./newProduct.css";
import Layout from "../../components/layout";

export default function NewProduct() {

  const [input,onChange={handleChange}   = useState({});
  const [file, setFile] = useState(null);
  const [input,onChange={handleChange}  = useState([]);


  return (
    <Layout>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input onChange={e=> setFile(e.target.files)[0]} type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input onChange={handleChange} type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input onChange={handleChange} type="text" placeholder="description........." />
          </div>

          <div className="addProductItem">
            <label>Price</label>
            <input onChange={handleChange} type="text" placeholder="100" />
          </div>

          <div className="addProductItem">
            <label>Categories</label>
            <input onChange={handleCategories} type="text" placeholder="jeans, skirts, ......" />
          </div>

          <div className="addProductItem">
            <label>Stock</label>

            <select  onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button className="addProductButton">Create</button>
        </form>
      </div>
    </Layout>
  );
}
