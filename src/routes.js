
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import Product from "./pages/product/Product";

let routes =[
    {path:"/" , element:<Home/>},
    {path:"/users" , element:<UserList/>},
    {path:"/newUsers" , element:<NewUser/>},
    {path:"/products" , element:<Products/>},
    {path:"/product/:productID" , element:<Product/>},
]

export default routes