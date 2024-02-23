import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      const token = response.data.token; // Supposons que le backend renvoie un jeton JWT
      // Stockez le jeton dans localStorage ou sessionStorage
      localStorage.setItem("token", token);
      // Redirigez l'utilisateur vers une autre page ou mettez à jour l'état de l'application pour refléter la connexion réussie
    } catch (error) {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
