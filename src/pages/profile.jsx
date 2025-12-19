function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя: {user.name}</p>
      <p>Фамилия: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
}

export default Profile;
