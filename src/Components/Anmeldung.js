
import { useState } from "react";
import { loginUser } from "../utils/dbUtils";
import "../Styles/forms.css";


export default function Anmeldung({ isAuthenticated, setToken, setIsAuthenticated }) {

    const [{ email, password }, setFormState] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

      const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          //if (!email || !password) return alert("Please fill out all the fields");
          const formDataJson = JSON.stringify({
            "address": {
                "email": email
            },
            "password": password,
        });

        const {content} = await loginUser(formDataJson);
          console.log("content", content);
          localStorage.setItem("token", content.token);
          setToken(content.token);
          setIsAuthenticated(true);
        } catch (error) {
          console.log(error.message);
        }
      };


  return (
    <div className="registration form-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
      <form className="registration-form">
        <fieldset>
            <legend>Zugangsdaten</legend>
            <div>
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange}></input>
            </div>
        </fieldset>
        <div className="button-container">
            <button type="submit">Anmelden</button>
        </div>
      </form>
    </div>
  )
}