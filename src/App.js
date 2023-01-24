import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Topbar from "./components/topbar/Topbar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      {router}
    </>
  );
}

export default App;
