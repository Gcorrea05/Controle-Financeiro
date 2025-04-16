import React from "react";
import "./Dashboard.css";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
} from "recharts";
import {
  Home, PieChart, Settings, Plus, LineChart as LineChartIcon, FileText,
} from "lucide-react";

const dataOverview = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 5000 },
  { name: "Apr", uv: 4000 },
  { name: "May", uv: 8000 },
  { name: "Jun", uv: 6000 },
  { name: "Jul", uv: 3000 },
  { name: "Aug", uv: 4000 },
];

const dataMonthly = [
  { name: "Sep", value: 0 },
  { name: "Oct", value: 74100 },
  { name: "Nov", value: 50000 },
  { name: "Dec", value: 62000 },
  { name: "Jan", value: 54000 },
  { name: "Feb", value: 66000 },
];

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="header-container">  
        <h1>Controle de Gastos</h1>
        <p>Atualize e controle sua vida financeira!</p>
      </div>

      <div className="overview-stats">
        <div className="overview">
          <h2>Visão Geral</h2>  
          <div className="chart-container">
            <div className="chart">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataOverview}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-info">
              <h3>Informações Adicionais</h3>
              <p>Valor total de transações: $100,000</p>
              <p>Lucro líquido: $50,000</p>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat-box">
            <h3>Desempenho</h3>
            <p>Desempenho geral de vendas.</p>
          </div>
          <div className="stat-box">
            <h3>Prevenção</h3>
            <p>Indicadores de risco e prevenção.</p>
          </div>
        </div>
      </div>

      <div className="traffic">
        <h2>Tráfego</h2>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Visitas</th>
              <th>Taxa de Conversão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/04/2025</td>
              <td>1500</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>11/04/2025</td>
              <td>2000</td>
              <td>6%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}