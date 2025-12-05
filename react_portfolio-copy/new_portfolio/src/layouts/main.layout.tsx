import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

const mainLayout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default mainLayout;
