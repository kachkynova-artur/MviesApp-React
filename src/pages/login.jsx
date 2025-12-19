import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Сначала зарегистрируйтесь");
      return;
    }

    if (user.email === email && user.password === password) {
      navigate("/profile");
    } else {
      alert("Неверный email или пароль");
    }
  };

  return (
    <div>
      <h2>Вход</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Войти</button>
    </div>
  );
}

export default Login;
