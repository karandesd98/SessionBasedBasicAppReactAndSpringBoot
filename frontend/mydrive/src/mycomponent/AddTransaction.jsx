import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTransaction = () =>{

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const [activeTab, setActiveTab] = useState("view");
    const [formData,setFormData] = useState({ amount:"", description:"", date:"" });
    const [errors,setErrors] = useState([]);
    const [allTransaction,setAllTransaction] =useState([]);

     useEffect(()=>{
        getAllTransaction();
     },[]);

    const handelChange = (e) => {
         const { name, value } = e.target;
         setFormData({
          ...formData,
          [name]:value
        });
    }

    const handelSub = async (e) => {
      try{

       var response  = await axios.post(`${API_BASE_URL}/api/addTransaction.json`,formData,{ withCredentials: true });
      alert(response.data);
      }catch(error){
        setErrors(error.response.data);
        console.error("Error saving expense:", error.response.data);
      }        
    }

const getAllTransaction = () => {

       axios.get(`${API_BASE_URL}/api/getAllTransaction.json`,{ withCredentials: true })
       .then((res)=>{
          setAllTransaction(res.data);
       })
       .catch((error)=>{
            console.log(error);
            setAllTransaction([]);
       });

       
}

    return (
        <div className="container mt-4">
      {/* Responsive Tabs */}
      <ul className="nav nav-pills justify-content-center flex-wrap gap-2">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "view" ? "active" : ""}`}
            onClick={() => { setActiveTab("view"); getAllTransaction()}}
          >
            View All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "add" ? "active" : ""}`}
            onClick={() => setActiveTab("add")}
          >
            Add
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "summary" ? "active" : ""}`}
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {activeTab === "view" && (
          <div>
            {allTransaction.length > 0 
            ? <table className="table table-primary">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
                </thead>
                <tbody>
                   {allTransaction.map((ele,index)=>(
                      <tr>
                        <td>{index+1}</td>
                        <td>{ele.description}</td>
                        <td>{ele.amount}</td>
                        <td>{ele.date}</td>
                      </tr>
                   ))} 
                </tbody>
              </table>
            : <h4>no transaction found</h4>
            }
          </div>
        )}
        {activeTab === "add" && (
          

          <div>
          {errors.length > 0 && (
                  <div className="alert alert-danger">
                     <ul>
                 { errors.map((err, index) => (<li key={index}>{err}</li>))}
                    </ul>
                  </div>
             )}


            <h4>Add New Transaction</h4>
            <div id="formDiv">
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input type="number" className="form-control" name="amount" onChange={handelChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control"   name="description" onChange={handelChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control"   name="date" onChange={handelChange} />
              </div>
              <button className="btn btn-primary" onClick={handelSub}>Submit</button>
            </div>
          </div>
        )}
        {activeTab === "summary" && (
          <div>
            <h4>Summary</h4>
            <p>Here you can see transaction summary.</p>
          </div>
        )}
      </div>
    </div>


    );
}

export default AddTransaction;