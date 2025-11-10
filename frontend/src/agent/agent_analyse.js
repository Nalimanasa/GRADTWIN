import React, { useState } from 'react';

function Analyse() {

  const [bauxite, setBauxite] = useState(100);
  const [alumina, setAlumina] = useState(40);
  const [moisture, setMoisture] = useState(20);
  const [soda, setSoda] = useState("");
  const [temperature, setTemperature] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const payload = {
      bauxite: Number(bauxite),
      soda: Number(soda),
      alumina: Number(alumina),
      moisture: Number(moisture),
      temperature: Number(temperature),
    };

    console.log("Sending JSON:", payload);

    const response = await fetch("https://gradtwin-backend.onrender.com/agent_material/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      alert("Backend error: " + text);
      return;
    }

    const data = await response.json();
    console.log("Server response:", data);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Bayer Process Simulator</h1>

      <form onSubmit={handlesubmit} style={styles.form}>
        <label>Bauxite Feed (t)</label>
        <input type="number" value={bauxite} onChange={(e) => setBauxite(e.target.value)} />

        <label>Alumina %</label>
        <input type="number" value={alumina} onChange={(e) => setAlumina(e.target.value)} />

        <label>Moisture %</label>
        <input type="number" value={moisture} onChange={(e) => setMoisture(e.target.value)} />

        <label>Caustic Soda (kg)</label>
        <input type="number" value={soda} onChange={(e) => setSoda(e.target.value)} />

        <label>Temperature (°C)</label>
        <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />

        <button type="submit"
        >Run</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    margin: "auto",
  },
};

export default Analyse;
