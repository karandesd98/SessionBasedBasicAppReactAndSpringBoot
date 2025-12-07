import { Outlet,useNavigate } from "react-router-dom";
import Header from "./Header";

function HomeCmp()
{
const navigate = useNavigate();
  

    return (
    <div className="container mt-5">
    <div className="container mt-4">
      <div className="row g-4">
        
        {/* Card 1: Add Transaction */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-currency-dollar" style={{ fontSize: "2rem", color: "#f1c40f" }}></i>
              </div>
              <h5 className="card-title">Add Transaction</h5>
              <p className="card-text">Add your daily transaction details</p>
              <button className="btn btn-primary" onClick={() => navigate("transactions")}>Add</button>
            </div>
          </div>
        </div>

        {/* Card 2: Add Image */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-image" style={{ fontSize: "2rem", color: "#27ae60" }}></i>
              </div>
              <h5 className="card-title">Add Image</h5>
              <p className="card-text">Upload your images</p>
              <button className="btn btn-primary" onClick={() => navigate("addImages")}>Add</button>
            </div>
          </div>
        </div>

        {/* Card 3: Add Video */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-play-circle" style={{ fontSize: "2rem", color: "#e74c3c" }}></i>
              </div>
              <h5 className="card-title">Add Video</h5>
              <p className="card-text">Upload your videos</p>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>

        {/* Card 4: Add Document */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-file-earmark-text" style={{ fontSize: "2rem", color: "#2980b9" }}></i>
              </div>
              <h5 className="card-title">Add Document</h5>
              <p className="card-text">Upload your documents</p>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>

      </div>
    </div>

      <Outlet />
       </div>

    );
}

export default HomeCmp;