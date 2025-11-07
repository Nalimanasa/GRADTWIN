import React, { useEffect, useState } from "react";
import axios from "axios";
import './pending.css'

function Progress() {
  const [items,setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get('http://127.0.0.1:8000/agent_material_view')
      .then(res =>  setItems(res.data))
      .catch(err => console.error(err));
  };
  
   const approveItem = async (itemId) => {
    try {
      await axios.post(`http://127.0.0.1:8000/del_material_view_Id/${itemId}/`);
      // Remove the approved item from the list
      setItems(items.filter(item => item.id !==itemId));
      alert('Item approved successfully!');
    } catch (err) {
      console.error(err.response || err.message);
      alert('Error approving item');
    }
  };
//   if (localStorage.getItem("isAdmin") !== "true") {
//     return <h2 style={{ color: "red", textAlign: "center" }}>Access Denied! Admin only.</h2>;
//   }

  return (
    <div>
        <center>
              <h2 style={{color:"red",textAlign:"center"}}>PENDING LIST</h2>
         <table  id="table" style={{textAlign:"center"}}>
             <tbody>
           <tr>
            <th style={style.th}>ID</th>
            <th style={style.th}>Bauxite</th>
            <th style={style.th}>Alumina</th>
            <th style={style.th}>Moisture</th>
            <th style={style.th}>Soda</th>
            <th style={style.th}>Temperature</th>
            <th style={style.th}>Action</th>
          </tr>
            {items.map(item =>(
              <tr key={item.id}>
                <td style={style.td}>{item.id}</td>
                <td style={style.td}>{item.bauxite}</td>
                <td style={style.td}>{item.alumina}</td>
                <td style={style.td}>{item.moisture}</td>
                <td style={style.td}>{item.soda}</td>
                {/* <td style={style.td}>{item.temparature}</td> */}
                <td style={style.td}>{item.temperature !== null ? item.temperature : 'N/A'}</td>
                <td style={style.td} onClick={() => approveItem(item.id)}>approve</td>
               </tr>
            ))}
          </tbody>
      </table>
      </center>
      </div>
  );
}

const style = {
  table: { border: '1px solid white', width: '100%', textAlign: 'center' },
  th: { border: '1px solid white',backgroundColor:"orange" },
  td: { border: '1px solid white' ,backgroundColor:"grey"}
};

export default Progress