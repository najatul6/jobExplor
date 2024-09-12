import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GoogleMap from "../GoogleMap/GoogleMap";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </div>
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default Root;
