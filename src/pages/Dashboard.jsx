import React, { useState } from "react";
import "./Dashboard.css";
import Login from "../pages/Login";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

function LoginModal({ onClose }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Alterna entre login e criação de conta

  const handleSwitch = () => {
    setIsCreatingAccount(!isCreatingAccount);
  };

  return (
    <div className="login-container">
      {isCreatingAccount ? (
        <div className="create-account">
          <h2>Criar Conta</h2>
          <form>
            <input type="text" placeholder="Nome" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Senha" className="input-field" />
            <button type="submit" className="submit-btn">
              Criar Conta
            </button>
          </form>
          <p>
            Já tem uma conta?{" "}
            <span className="switch-link" onClick={handleSwitch}>
              Faça Login
            </span>
          </p>
        </div>
      ) : (
        <div className="login">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Senha" className="input-field" />
            <button type="submit" className="submit-btn">
              Entrar
            </button>
          </form>
          <p>
            Ainda não tem uma conta?{" "}
            <span className="switch-link" onClick={handleSwitch}>
              Crie agora
            </span>
          </p>
        </div>
      )}
      <button className="close-btn" onClick={onClose}>
        Fechar
      </button>
    </div>
  );
}

export default function Dashboard() {
  const [showLogin, setShowLogin] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Novo estado para o valor inserido

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    console.log("Valor inserido:", inputValue); // Simulação de envio para o banco de dados
    setInputValue(""); // Reseta o campo após o envio
  };

  return (
    <div className="main-container">
      {/* Cabeçalho */}
      <div className="header-container">
        <h1>Controle de Gastos</h1>
        <p>Atualize e controle sua vida financeira!</p>
      </div>

      {/* Botão de Login no canto superior direito */}
      <button className="login-btn" onClick={() => setShowLogin(true)}>
        Login
      </button>

      {/* Tela de Login como Overlay */}
      {showLogin && (
        <div className="overlay">
          <LoginModal onClose={() => setShowLogin(false)} />
        </div>
      )}

      {/* Seção de Visão Diária */}
      <div className="overview-stats">
        <div className="overview">
          <h2>Visão Diária</h2>
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
              <p>Dia que mais gastou: 15/04</p>
              <p>Com o que mais gastou: Alimentação</p>
              <p>Total do mês: R$ 8.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campo para entrada de valores */}
      <div className="value-input">
        <h2>Insira valores</h2>
        <input
          type="text"
          placeholder="Digite o valor"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
        />
        <button onClick={handleInputSubmit} className="submit-btn">
          Enviar
        </button>
      </div>

      {/* Gastos */}
      <div className="traffic">
        <h2>Gastos</h2>
        <p>Esta seção apresentará os gastos vindos do backend futuramente.</p>
      </div>
    </div>
  );
}
