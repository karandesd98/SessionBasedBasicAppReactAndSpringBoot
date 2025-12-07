import Header from "./Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    var userName = localStorage.getItem('userName');

    return(
        
      <div>
      <Header username={userName} ></Header>
      <div className="container mt-4">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
    </div>

    );
}

export default HomeLayout;