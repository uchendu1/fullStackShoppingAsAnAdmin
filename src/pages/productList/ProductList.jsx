import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import Layout from "../../components/layout";
import { deleteProducts, getProducts } from "../../redux/apiCalls";


export default function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

useEffect(() =>{
  getProducts(dispatch);
}, [dispatch]);

const handleDelete = (id) => {
  deleteProducts(id, dispatch);
};

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title || params.row.name}
          </div>
        );
      },
    },
    { field: "InStock", headerName: "Stock", width: 220 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Layout>

    <div className="productList">
      <DataGrid
        rows={products || data}
        disableSelectionOnClick
        columns={columns}
        getRowId= {(row) => row._id}
        pageSize={8}
        checkboxSelection
        />
    </div>
        </Layout>
  );
}
