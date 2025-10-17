import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <main className={style.layoutMainContainer}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
