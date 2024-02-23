import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterSubmitted, setIsRegisterSubmitted] = useState(false);

  useEffect(() => {
    // Vérifie si un token est présent dans le localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleRegisterSubmit = () => {
    setIsRegisterSubmitted(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Vous êtes déjà connecté.</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          {!isRegisterSubmitted && (
            <div>
              <LoginForm onLogin={handleLogin} />
            </div>
          )}
          {!isLoggedIn && !isRegisterSubmitted && (
            <div>
              <RegisterForm onRegisterSubmit={handleRegisterSubmit} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
