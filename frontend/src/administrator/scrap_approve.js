import {React ,useEffect ,useState} from'react';
import axios from 'axios';
import './pending.css'

function Approve(){
  const [items,setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get(`https://gradtwin-backend.onrender.com/del_approve/`)
      .then(res =>  setItems(res.data))
      .catch(err => console.error(err));
  };
  if (localStorage.getItem("isAdmin") !== "true") {
    return <h2 style={{ color: "red", textAlign: "center" }}>Access Denied! Admin only.</h2>;
  }
  return (
    <div  className="approved">
              <h2 style={{color:"red",textAlign:"center"}}>APPROVED LIST</h2>
         <table id="table" border='1'>
          <tbody>
            <tr>
              <th>NAME</th><th>Email</th>
              <th>username</th><th>password</th>
              <th>phone</th><th>city</th>
              <th>state</th><th>country</th>
              <th>pincode</th><th>address</th>
              <th>status</th>
            </tr>
            {items.map(item =>(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td>{item.pincode}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
  )
}

export default Approve;