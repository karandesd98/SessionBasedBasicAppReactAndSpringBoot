
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ username, userImage }) => {

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const navigate = useNavigate();

      const handleLogout = async () => {
         try{
         const response = await axios.post(`${API_BASE_URL}/public/logout`,{},
             {
              headers: {"Content-Type": "application/json" },
              withCredentials: true // Important if using cookies/session
             }
            );
             
            console.log(response.data);
            localStorage.removeItem("isLoggedIn"); 
            localStorage.removeItem("userName");
            localStorage.removeItem("message");
            navigate("/login"); 

         }catch(error){
          console.log(error);
         }

     };
    return (
        <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">

       <div>
        <img src={userImage || "https://via.placeholder.com/40"} alt="User" className="rounded-circle"  style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
      </div>

      {/* Center: Welcome Message */}
      <div className="text-center flex-grow-1">
        <h5 className="m-0">Welcome, {username || "User"}!</h5>
      </div>

      {/* Right: Logout Button */}
      <div>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>


        </header>
    );
}

export default Header;