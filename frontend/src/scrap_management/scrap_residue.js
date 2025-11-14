import React, { useEffect, useState } from "react";
import axios from 'axios'

function Residue() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const urlResult = query.get("result");
    if (urlResult) {
      try {
        setResult(JSON.parse(urlResult));
      } catch {
        console.error("Invalid result JSON in URL");
      }
    } else {
      fetchResidueData();
    }
  }, []);


  const fetchResidueData = () => {
    axios
      .get("https://gradtwin-backend.onrender.com/scrap_feedback/")
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  };
  if (!result) {
    return <p style={{ textAlign: "center" }}>Loading residue data...</p>;
  }

  return (
    <div style={{ textAlign: "center" ,color:"white"}}>
      <h2>Residue Process Result</h2>
      {result.aluminum_yield ? (
        <div>
          <p><b>Aluminum Yield:</b> {result.aluminum_yield}</p>
          <p><b>Waste:</b> {result.waste}</p>
          <p><b>Feedback:</b> {result.feedback || "No feedback yet."}</p>
                 </div>
      ) : (
        <p>No result data found.</p>
      )}
    </div>
  );
}

export default Residue;
