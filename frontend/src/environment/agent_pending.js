import React, { useEffect, useState } from "react";
import axios from "axios";
import './eni.css'

function Agentpending() {
  const [items,setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get('https://gradtwin-backend.onrender.com/agent_pending/')
      .then(res =>  setItems(res.data))
      .catch(err => console.error(err));
  };
  
   const approveItem = async (itemId) => {
    try {
      await axios.post(`https://gradtwin-backend.onrender.com/agent_pending_Id/${itemId}/`);
      // Remove the approved item from the list
      setItems(items.filter(item => item.id !==itemId));
      alert('Item approved successfully!');
    } catch (err) {
      console.error(err.response || err.message);
      alert('Error approving item');
    }
  }

  const downloadExcel = async () => {
  const response = await fetch("https://gradtwin-backend.onrender.com/agent_data/?approved=true");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "registered_users.xlsx";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

  return (
    <div  className="pending">
        <center><br/><br/>
              <h2 style={{textAlign:"center"}}>AGENT PENDING LIST</h2>
         <table  id="table" style={{textAlign:"center"}}>
          <tbody>
            <tr>
              <th className="th">ID</th>
              <th className="th">NAME</th><th className="th">Email</th>
              <th className="th">username</th><th className="th">password</th>
              <th className="th">phone</th><th className="th">city</th>
              <th className="th">state</th><th className="th">country</th>
              <th className="th">pincode</th><th className="th">address</th>
              <th className="th">status</th>
            </tr>
            {items.map(item =>(
              <tr key={item.id}>
                <td className="td">{item.id}</td>
                <td className="td">{item.name}</td>
                <td className="td">{item.email}</td>
                <td className="td">{item.username}</td>
                <td className="td">{item.password}</td>
                <td className="td">{item.phone}</td>
                <td className="td">{item.city}</td>
                <td className="td">{item.state}</td>
                <td className="td">{item.country}</td>
                <td className="td">{item.pincode}</td>
                <td className="td">{item.address}</td>
                <td className="td">{item.status}</td>
                <td  onClick={() => approveItem(item.id)}>approve</td>
               </tr>
            ))}
          </tbody>
      </table>
      <button  onClick={downloadExcel} 
                       style={{ padding: "8px 16px",
                                backgroundColor: "#28a745",
                                color: "white",
                                 border: "none",
                                 borderRadius: "5px",
                                cursor: "pointer"
                               }}>
                               Download
                            </button>
      </center>
      </div>
  );
}

export default Agentpending;
