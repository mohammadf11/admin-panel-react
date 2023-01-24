import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Topbar from "./components/topbar/Topbar";
import SideBar from "./components/sidebar/SideBar";
import './App.css'
function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
