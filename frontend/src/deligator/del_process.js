import React, { useEffect, useState } from "react";
import axios from "axios";

function Process() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://127.0.0.1:8000/del_material_approved/")
      .then((response) => setItems(response.data))
      .catch((err) => console.error(err));
  };


 const sendFeedback = async (item) => {
    const payload = {
      bauxite: Number(item.bauxite),
      soda: Number(item.soda),
      alumina: Number(item.alumina),
      moisture: Number(item.moisture),
      temperature: Number(item.temperature),
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/scrap_feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to analyze");

      const data = await res.json();

      alert("Material analyzed successfully!");
      console.log("Analysis result:", data);

      // ✅ Redirect to Residue page and pass the data
    //   window.location.href = `/residue?result=${encodeURIComponent(JSON.stringify(data))}`;
    } catch (error) {
      console.error("Error:", error);
      alert("Analysis failed. Check console.");
    }
  };
  const style = {
    th: { border: "1px solid black", padding: "8px", backgroundColor: "orange" },
    td: { border: "1px solid black", padding: "8px" ,backgroundColor:"grey"},
  };

  return (
    <div style={{backgroundImage:`url(https://c8.alamy.com/comp/2SACD29/stacked-aluminum-extrusions-forming-an-industrial-metallic-background-3d-2SACD29.jpg)`,
              backgroundSize:" cover",
            backgroundPosition: "center",width:"100%"
        }}> 
      <h2 style={{ textAlign: "center" }}>Approved Material List</h2>
      <table id="table" style={{ textAlign: "center", borderCollapse: "collapse", margin: "0 auto" }}>
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

          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td style={style.td}>{item.id}</td>
                <td style={style.td}>{item.bauxite}</td>
                <td style={style.td}>{item.alumina}</td>
                <td style={style.td}>{item.moisture}</td>
                <td style={style.td}>{item.soda}</td>
                <td style={style.td}>
                  {item.temperature !== null ? item.temperature : "N/A"}
                </td>
                <td
                  style={{ ...style.td, cursor: "pointer", color: "red" }}
                  onClick={() => sendFeedback(item)}
                >
                  Analyse
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    
    </div>
  );
}

export default Process;
