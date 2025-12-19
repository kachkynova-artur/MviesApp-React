import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    alert("Регистрация успешна");
  };

  return (
    <div>
      <h2>Регистрация</h2>

      <input name="name" placeholder="Имя" onChange={handleChange} />
      <input name="surname" placeholder="Фамилия" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={handleChange}
      />
      <input name="age" placeholder="Возраст" onChange={handleChange} />

      <button onClick={handleSubmit}>Зарегистрироваться</button>
    </div>
  );
}

export default Register;
