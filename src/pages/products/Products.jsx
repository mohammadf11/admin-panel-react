import { useState } from "react";
import { products } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Product.css";
import { DeleteOutline, Edit } from "@mui/icons-material";

function ProductList() {
  const [productDatas, setProductDatas] = useState(products);
  const productDelete = (id) => {
    setProductDatas(productDatas.filter((product) => product.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="productList">
              <img src={params.row.avatar} className="productListImg" alt="" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <Edit className="productListEdit" />
            </Link>
            <DeleteOutline
              onClick={() => productDelete(params.row.id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={productDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;