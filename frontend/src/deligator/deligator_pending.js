import React, { useEffect, useState } from "react";
import axios from "axios";
import './pending.css'
import Userlogin from './deligator_login'

function Pending() {
  const [items,setItems] = useState([]);
  const [showLogin ,setShowlogin]=useState()

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get('http://127.0.0.1:8000/del_pending/')
      .then(res =>  setItems(res.data))
      .catch(err => console.error(err));
  };
  
   const approveItem = async (itemId) => {
    try {
      await axios.post(`http://127.0.0.1:8000/del_pending_Id/${itemId}/`);
      // Remove the approved item from the list
      setItems(items.filter(item => item.id !==itemId));
      alert('Item approved successfully!');
    } catch (err) {
      console.error(err.response || err.message);
      alert('Error approving item');
    }
  }

  return (
    <main>
      {!showLogin ? (
    <div className="pending">
              <h2 style={{color:"red",textAlign:"center"}}>PENDING LIST</h2>
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
      <button  id="button" onClick={()=>setShowlogin()}>back</button>
      </div>
      ) : (
        <Userlogin />
      )
    }
    </main>
  );
}

export default Pending;
