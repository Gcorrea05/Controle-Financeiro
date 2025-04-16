import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-box">
      <h2>Bem-vindo!</h2>
      <form>
        <div className="inputBox">
          <input type="text" required />
          <span>Usuário</span>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Senha</span>
        </div>
        <input type="submit" value="Entrar" />
      </form>
      <button className="register-btn">Cadastre-se</button>
    </div>
  );
}
