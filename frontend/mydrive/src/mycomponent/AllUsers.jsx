import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllUsers(){
const navigate = useNavigate();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const[allUser,setAllUser] = useState([]);

  const[showModal,setShowModal] = useState(false);
  const[userToChangePass,setUserToChangePass] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


useEffect(() =>{
getAllUsers();
},[]);

function getAllUsers(){

    axios.get(`${API_BASE_URL}/api/getAllUsers.json`,{withCredentials: true})
    .then(res => {
        console.log(res);
       setAllUser(res.data);
    })
    .catch(error => {
        console.log(error);
    });

}

function addUser(){
navigate("/home/addNewUser");
}

function changePassUI(user){
    setUserToChangePass(user);
    setShowModal(true);
    setError("");
}

const changePassWord = () => {
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match!");
      return;
    }
    setError("");
    // Call API or logic to change password here
    alert("Password changed successfully!");
    setShowModal(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };


    return (<>
         <div style={{textAlign : "right"}}> 
            <input type="button" value="Add User" onClick={addUser} className="btn btn-primary btn-sm"  />
         </div>
         <table className="table">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>User Name</th>
                <th>Password</th>
                <th>User Address</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    allUser.map((user,index)=>(
                        <tr key={user.userId}>
                            <td>{index+1}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td>{user.address}</td>
                            <td>{user.age}</td>
                            <td><input type="button" onClick={() => changePassUI(user)} className="btn btn-success btn-sm" value="Change Password" /></td>
                        </tr>
                    ))
                }
            </tbody>
         </table>

         {
            showModal && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Change Password</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>

                            <div className="modal-body">
                              <p><strong>Email:</strong> {userToChangePass.userId}</p>
                              <p><strong>Name:</strong> {userToChangePass.userName}</p>

                              <div className="mb-3">
                                <label className="form-label">Old Password</label>
                                <input type="password" className="form-control" value={oldPassword}  onChange={(e) => setOldPassword(e.target.value)} />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input type="password" className="form-control" value={newPassword}  onChange={(e) => setNewPassword(e.target.value)} />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">Confirm New Password</label>
                                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />
                              </div>
                              
                            {error && <div className="alert alert-danger">{error} </div>}
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="btn btn-success" onClick={changePassWord} > Change Password </button>
                            </div>

                        </div>
                    </div>

                </div>
           )
         }


    </>);
}

export default AllUsers;