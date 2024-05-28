import { useState } from "react";

const LoginForm = ({ isLogged, setIsLogged }) => {
  const [userEsm, setUserEsm] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const login = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        // if method === "POST" && ↓
        body: JSON.stringify(data),
      });
      if (login.status == 200) {
        setIsLogged(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={loginUser}>
      <input
        type="text"
        name="username"
        value={userEsm}
        onChange={(event) => {
          setUserEsm(event.target.value);
        }}
      />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <button type="submit">ورود</button>
    </form>
  );
};

export default LoginForm;
