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
      <div className="content">
        <header>
          <div className="header-container">
            <h1>Controle de Gastos</h1>
            <p>Atualize e controle sua vida financeira!</p>
          </div>
        </header>

        <main>
          <section className="overview-stats">
            <div className="overview">
              <h2>Visão Geral</h2>
              <div className="chart-container">
                <div className="chart">
                  <p>Gráfico de desempenho (placeholder)</p>
                </div>
                <div className="chart-info">
                  <p>Data de pico: <strong>10.06.2023</strong></p>
                  <p>Montante: <strong>564.893</strong></p>
                  <p>Aumento: <strong>+19.920</strong></p>
                </div>
              </div>
            </div>

            <div className="stats">
              <div className="stat-box">
                <h3>Desempenho</h3>
                <p><strong>88%</strong></p>
                <p>+524k</p>
              </div>
              <div className="stat-box">
                <h3>Prevenção</h3>
                <p><strong>99%</strong></p>
                <p>+17,4k</p>
              </div>
            </div>
          </section>

          <section className="traffic">
            <h2>Tráfego</h2>
            <table>
              <thead>
                <tr>
                  <th>Fonte</th>
                  <th>Quantidade</th>
                  <th>Porcentagem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aprovado</td>
                  <td>1.405.665</td>
                  <td>56,3%</td>
                </tr>
                <tr>
                  <td>Em análise</td>
                  <td>478.540</td>
                  <td>32,6%</td>
                </tr>
                <tr>
                  <td>Verificação 2FA</td>
                  <td>239.003</td>
                  <td>82,0%</td>
                </tr>
                <tr>
                  <td>Fraudulento</td>
                  <td>237.577</td>
                  <td>74,5%</td>
                </tr>
                <tr>
                  <td>Outros</td>
                  <td>566.040</td>
                  <td>95,4%</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
