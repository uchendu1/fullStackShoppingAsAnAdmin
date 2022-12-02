import { useState } from "react";
import "./newProduct.css";
import Layout from "../../components/layout";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";



export default function NewProduct() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);


  


  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);





    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  };

  return (
    <Layout>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="file"
            />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Apple Airpods"
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              name="description"
              onChange={handleChange}
              type="text"
              placeholder="description........."
            />
          </div>

          <div className="addProductItem">
            <label>Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              placeholder="100"
            />
          </div>

          <div className="addProductItem">
            <label>Categories</label>
            <input
              onChange={handleCategories}
              type="text"
              placeholder="jeans, skirts, ......"
            />
          </div>

          <div className="addProductItem">
            <label>Stock</label>

            <select name="price" onChange={handleChange}>
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
