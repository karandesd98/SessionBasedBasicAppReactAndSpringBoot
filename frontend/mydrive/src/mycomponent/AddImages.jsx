import { useEffect, useState } from "react";
import axios from "axios";

function AddImages(){
 const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
 const [selectedFile, setSelectedFile] = useState(null);
 const [images, setImages] = useState([]);

 useEffect(()=>{
printAllImages();
 },[]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  
const handleUpload = async () => {
    if (!selectedFile) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/uploadImage.json`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true
      });
     // alert( response.data);
      printAllImages();
    } catch (error) {
      alert(error);
    }
  }

  const printAllImages = () => {
    
  axios.get(`${API_BASE_URL}/api/getAllImages.json`,{withCredentials: true})
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching images:", error);
      });

  }


    return (<>
<div className="">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="btn btn-primary mt-3" onClick={handleUpload} > Upload Image </button>
</div>


 <h4 className="mt-4">Image Gallery</h4>
      <div className="d-flex flex-wrap">
        {images.map((img) => (
          <div key={img.userPhotoId} className="m-2 text-center">
            <img
              src={`${API_BASE_URL}/${img.filePath}`} 
              alt={img.fileName}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p>{img.fileName}</p>
          </div>
        ))}
      </div>



    </>);
}

export default AddImages;