import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full bg-[#191919] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
