import React from 'react'
import './main.css'
import { useState } from 'react'
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
   Title,Tooltip,
   Legend
} from 'chart.js';
import bayer from './bayer.png'
import extract from './extract.webp'


ChartJs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function Extraction(){
     const[bauxite,setBauxite] = useState(100)
     const[alumina,setAlumina]=useState(40)
     const[moisture,setMoisture]=useState(20)
     const [soda, setSoda] = useState("");
     const [temperature, setTemperature] = useState("");
     const [result, setResult] = useState(null);
     

     const handleSubmit = async (e) => {
    e.preventDefault();

     const payload = {
    bauxite: Number(bauxite),
    soda: Number(soda),
    alumina: Number(alumina),
    moisture: Number(moisture),
    temperature: Number(temperature),
  };

  console.log("Sending JSON:", payload);

  const response = await fetch("http://127.0.0.1:8000/api/feedback/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // critical
      "Accept": "application/json",
    },
    body: JSON.stringify(payload), // must stringify
  });

  if (!response.ok) {
    console.error("Backend error:", response.status);
    const text = await response.text();
    alert("Backend error: " + text);
    return;
  }

  const data = await response.json();
  console.log("Server response:", data);
  setResult(data);
};
//  fixed parameters 
     const digestionEff=0.95;
     const clarificationloss=0.01;
     const precipitationrecovery=0.92;
     const calcination=0.01;
     const naohperalumina=0.3;
     const aloh3peral2o3=(2*78.003)/101.9613;

// calculations
const drybauxite=bauxite * (1-moisture/100)
const aluminabauxite=drybauxite * (alumina /100)
const othersolids =drybauxite -aluminabauxite;

const aluminadissolved =aluminabauxite *digestionEff;
const aluminaundissloved=aluminabauxite -aluminadissolved;
const naohconsumed =aluminadissolved *naohperalumina;

const aluminalosttomud = aluminadissolved * clarificationloss;
const aluminaavailable= aluminadissolved -aluminalosttomud;

const aloh3produced=(aluminaavailable *  aloh3peral2o3 ) * precipitationrecovery
const aluminacalcined =(aloh3produced /aloh3peral2o3) * (1- calcination);

const redmud =othersolids +aluminalosttomud;

//data table 
const results = [
   ["bauxite",bauxite.toFixed(2)],
   ["drybauxite,",drybauxite.toFixed(2)],
   ["aluminabauxite",aluminabauxite.toFixed(2)],
   ["aluminadissolved",aluminadissolved.toFixed(2)],
   ["aluminaundissloved",aluminaundissloved.toFixed(2)],
   ["naohconsumed",naohconsumed.toFixed(2)],
 ["aluminalosttomud",aluminalosttomud.toFixed(2)],
   ["aloh3produced",aloh3produced.toFixed(2)],
   ["aluminacalcined",aluminacalcined.toFixed(2)],
   ["redmud",redmud.toFixed(2)],
];

//chart data
const chartdata={
    labels:['aloh3 in feed','al2o3 dissolved','al2o3 calcined','redmud'],
    datasets:[
        {
            labels:"mass",
            data:[aluminabauxite ,aluminadissolved ,aluminacalcined ,redmud],
            backgroundColor:['blue','green','orange','red'],
        }
    ]
}
const feedbackMsg = () => {
  if (aluminacalcined < aluminabauxite * 0.35) return "Yield is low, increase digestion efficiency.";
  if (redmud > bauxite * 0.6) return "Red mud is high, optimize soda usage.";
  return "Process is near optimal!";
};


//onsole.log(typeof bauxite, bauxite);

    return(
        <div>
                        <img class="image" 
              src={extract} alt="extraction"  />
   <center>
    <h1>
                BAYER PROCESS
</h1>
                <p style={{padding:"20px" }} >
                The Bayer process is the primary method to extract pure alumina (aluminum oxide) from bauxite ore by dissolving the alumina in a hot, concentrated solution of sodium hydroxide (caustic soda), filtering out insoluble impurities like iron oxides (red mud), then precipitating pure aluminum hydroxide by cooling and seeding with seed crystals, and finally heating the aluminum hydroxide to produce alumina. This purified alumina is then used in the Hall-Héroult process to produce metallic aluminum. 
            </p>
              </center>
            <div className="max-w-3xl ,max-h-3xl " >
                <img src={bayer} alt="bayerprocss" />
            
        <h2 style={{ paddingTop :"20px" }} >
        Here are the steps of the Bayer process:</h2>
        <h3 style={{ color: 'red',  padding:' 0px 30px'   }} >
                       Digestion 
        </h3>
        <p>
 Bauxite ore is first crushed and then mixed with a concentrated sodium hydroxide solution to create a slurry. This slurry is pumped into digesters, where it is heated under pressure to dissolve the aluminum oxide from the bauxite into sodium aluminate. 
 </p>
 <h3 style={{ color: 'red',  padding:'0px 30px'   }} >
    clarification
    </h3>
    <p>
     The hot slurry is then cooled, causing the insoluble impurities (like iron oxides and silica) to settle. After settling, the clear liquid containing the sodium aluminate is filtered to remove these solid impurities, which are collected as "red mud". 
     </p>
     <h3 style={{ color: 'red',  padding:' 0px 30px'   }} >
        Precipitation:
     </h3>
     <p>
 Pure crystals of aluminum hydroxide are added to the filtered sodium aluminate solution to seed the precipitation process. The solution is cooled, causing the pure aluminum hydroxide to precipitate out of the solution.
 </p>
 <h3 style={{ color: 'red',  padding:' 0px 30px'   }} >
Calcination:
</h3><p>
 The precipitated aluminum hydroxide is filtered, washed, and then heated to a high temperature in a calciner. This process removes the water molecules, yielding pure alumina (Al₂O₃). 
</p>
</div>
  <main>
    <center>
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bayer Process Simulator
      </h1>

      {/* Input Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
<form onSubmit={handleSubmit} style={styles.form} >
 <table>
        <div>
          <tr>  
    <td style={{padding:"0px 5px"}}>  <label>Bauxite Feed(t)
        </label></td>
    <td>  <input style={{width:"100%"}}
            type="number"
            value={bauxite}
            onChange={(e) => setBauxite(Number(e.target.value))}
            className="w-full p-2 border rounded"
          /></td>
          </tr>
        </div>
        <div>
            <tr>
      <td style={{padding:"0px 16px",paddingLeft:"5px"}}><label>Alumina %</label></td>
    <td>  <input  style={{width:"100%"}}
            type="number"
            value={alumina}
            onChange={(e) => setAlumina(Number(e.target.value))}
            className="w-full p-2 border rounded"
          /></td></tr>
        </div>
        <div><tr>
      <td><label style={{padding:"0px 16px",paddingLeft:"5px"}}>Moisture %</label></td>
    <td>  <input  style={{width:"100%"}}
            type="number"
            value={moisture}
            onChange={(e) => setMoisture(Number(e.target.value))}
            className="w-full p-2 border rounded"
          /></td></tr>
          </div>

          <div>
            <tr>
              <td>
                 <label>Caustic Soda (kg):</label></td>
               <td>  <input style={{width:"100%"}}
          type="number"
          value={soda}
          onChange={(e) => setSoda(e.target.value)} />
        </td>
        </tr>
        </div>
            
            <div><tr>
    <td>    <label>Temperature (°C):</label></td>
   <td>     <input  style={{width:"100%"}}
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

              </td>
            </tr>
            <center>
             <button  type="submit" >Run Process</button>
          </center>
          </div>
     </table>
     </form>
     </div>
<br/><br/><br/>
     <section>
        <center>
            <table className="w-full border-collapse border border-gray-300 mb-6">
           <thead>
            <tr className="bg-gray-200">
             <th className="border px-2 py-1">Stream</th>
             <th className="border px-2 py-1">Mass</th>
                            </tr>
           </thead>
           <tbody>
  {results.map(([name, val], i) => (
    <tr key={i}>
      <td className="border px-2 py-1">{name}</td>
      <td className="border px-2 py-1">{val}</td>
    </tr>
  ))}
</tbody>
<div className="mt-4 p-3 bg-yellow-100 rounded">
  <strong>Feedback:</strong> {feedbackMsg()}
</div>
{result && (
        <div style={styles.result}>
          <h3>Process Results:</h3>
          <p>Aluminum Yield: {result.aluminum_yield} kg</p>
          <p>Waste (Red Mud): {result.waste} kg</p>
          <p><strong>Feedback:</strong> {result.feedback}</p>
        </div>
      )}
            </table>

            <div className="h-10">
            <Bar data={chartdata}/>
            </div>
        </center>
     </section>
 </div>
 </center>
</main>
<div>
    </div>
    </div>
    )
  }



const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
    gap: "10px",
  },
  result: {
    backgroundColor:"wheat",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  }
};

export default Extraction;