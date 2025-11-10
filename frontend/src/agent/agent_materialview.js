import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Material() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('https://gradtwin-backend.onrender.com/agent_material/')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Load selected material by ID
  const approveItem = async () => {
    try {
      const res = await axios.post(`https://gradtwin-backend.onrender.com/agent_material_view/`);
      setSelectedItem(res.data); 
      alert('material details successfull') // ✅ send material details to next page
          } catch (err) {
      alert('Error fetching material');
    }
  };

  

  return (
    <div style={{backgroundImage:`url(https://www.shutterstock.com/image-photo/factory-aluminum-pvc-windows-doors-260nw-1055814968.jpg)`,
            backgroundSize:" cover",
            backgroundPosition: "center",width:"100%"}}>
      <h2 style={{ color: "red", textAlign: "center" }}>Material View</h2>
      <table style={style.table}>
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
          {items.map(item => (
            <tr key={item.id}>
              <td style={style.td}>{item.id}</td>
              <td style={style.td}>{item.bauxite}</td>
              <td style={style.td}>{item.alumina}</td>
              <td style={style.td}>{item.moisture}</td>
              <td style={style.td}>{item.soda}</td>
              <td style={style.td}>{item.temperature}</td>
              <td style={style.td}>
                <button onClick={() => approveItem(item.id)}>Run Process</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const style = {
  table: { border: '1px solid white', width: '100%', textAlign: 'center' },
  th: { border: '1px solid white',backgroundColor:"orange" },
  td: { border: '1px solid white',backgroundColor:"grey" }
};

export default Material;
