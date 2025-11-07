import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BayerProcessSimulator() {
  // Input states
  const [bauxiteMass, setBauxiteMass] = useState(1000);
  const [aluminaPct, setAluminaPct] = useState(40);
  const [moisturePct, setMoisturePct] = useState(10);

  // Fixed process parameters
  const digestionEff = 0.95;
  const clarificationLoss = 0.01;
  const precipitationRecovery = 0.92;
  const calcinationLoss = 0.01;
  const naohPerTonneAlumina = 0.3;
  const aloh3PerAl2o3 = (2 * 78.003) / 101.9613;

  // --- Calculations ---
  const dryBauxite = bauxiteMass * (1 - moisturePct / 100);
  const aluminaInBauxite = dryBauxite * (aluminaPct / 100);
  const otherSolids = dryBauxite - aluminaInBauxite;

  const aluminaDissolved = aluminaInBauxite * digestionEff;
  const aluminaUndissolved = aluminaInBauxite - aluminaDissolved;
  const naohConsumed = aluminaDissolved * naohPerTonneAlumina;

  const aluminaLostToMud = aluminaDissolved * clarificationLoss;
  const aluminaAvailable = aluminaDissolved - aluminaLostToMud;

  const aloh3Produced = (aluminaAvailable * aloh3PerAl2o3) * precipitationRecovery;
  const aluminaCalcined = (aloh3Produced / aloh3PerAl2o3) * (1 - calcinationLoss);

  const redMud = otherSolids + aluminaLostToMud;

  // Data table
  const results = [
    ["Bauxite feed (t)", bauxiteMass.toFixed(2)],
    ["Dry bauxite (t)", dryBauxite.toFixed(2)],
    ["Al2O3 in bauxite (t)", aluminaInBauxite.toFixed(2)],
    ["Al2O3 dissolved (t)", aluminaDissolved.toFixed(2)],
    ["Al2O3 undissolved (t)", aluminaUndissolved.toFixed(2)],
    ["NaOH consumed (t)", naohConsumed.toFixed(2)],
    ["Al2O3 lost to red mud (t)", aluminaLostToMud.toFixed(2)],
    ["Al(OH)3 produced (t)", aloh3Produced.toFixed(2)],
    ["Al2O3 after calcination (t)", aluminaCalcined.toFixed(2)],
    ["Red mud produced (t)", redMud.toFixed(2)],
  ];

  // Chart data
  const chartData = {
    labels: ["Al2O3 in feed", "Al2O3 dissolved", "Al2O3 calcined", "Red mud"],
    datasets: [
      {
        label: "Mass (tonnes)",
        data: [aluminaInBauxite, aluminaDissolved, aluminaCalcined, redMud],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bayer Process Simulator
      </h1>

      {/* Input Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium">Bauxite Feed (t)</label>
          <input
            type="number"
            value={bauxiteMass}
            onChange={(e) => setBauxiteMass(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Alumina %</label>
          <input
            type="number"
            value={aluminaPct}
            onChange={(e) => setAluminaPct(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Moisture %</label>
          <input
            type="number"
            value={moisturePct}
            onChange={(e) => setMoisturePct(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Results Table */}
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Stream</th>
            <th className="border px-2 py-1">Mass (t)</th>
          </tr>
        </thead>
        <tbody>
          {results.map(([name, val], i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{name}</td>
              <td className="border px-2 py-1 text-right">{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <div className="mt-4 p-3 bg-yellow-100 rounded">
  <strong>Feedback:</strong> {feedbackMsg()}
</div>

      {/* Chart */}
      <div className="h-80">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
