



import { useState } from "react";
import { userRows } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Product.css";
import { DeleteOutline, Edit } from "@mui/icons-material";

function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);
  const userDelete = (id) => {
    setUserDatas(userDatas.filter((user) => user.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "user",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userList">
              <img src={params.row.avatar} className="userListImg" alt="" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <Edit className="userListEdit" />
            </Link>
            <DeleteOutline
              onClick={() => userDelete(params.row.id)}
              className="userListDelete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
      />
    </div>
  );
}

export default UserList;
