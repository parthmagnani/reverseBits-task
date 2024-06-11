import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-6">
        <div className="col-span-2 hidden md:block">
          {/* Side bar component will be there */}
          <SideBar />
        </div>

        <div className="col-span-4 border">
          <Header />

          <div className="custom-height">
            {/* All pages will get render here */}
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
