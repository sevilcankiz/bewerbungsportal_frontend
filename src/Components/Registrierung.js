
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { registerUser } from "../utils/dbUtils";
import "../Styles/forms.css";


export default function Registrierung({ isAuthenticated, setToken, setIsAuthenticated }) {

    const [{ email, password, firstName, lastName, postCode, street, city, phone }, setFormState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        postCode: "",
        street: "",
        city: "",
        phone: "",
      });

      const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

      const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          if (!email || !password) return alert("Please fill out all the fields"); // TODO VALIDIERUNG
          const formDataJson = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "password": password,
            "address": {
                "postCode": postCode,
                "street": street,
                "city": city,
                "email": email,
                "phone": [phone]
            }
        });

          const {content} = await registerUser(formDataJson);
          console.log("test", content);
          localStorage.setItem("token", content.token);
          setToken(content.token);
          setIsAuthenticated(true);
        } catch (error) {
          console.log(error.message);
        }
      };


  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="registration form-container">
        <h1>Registrierung</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
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
        <fieldset>
            <legend>Persönliche Daten</legend>
            <div>
                <label htmlFor="firstName">Vorname</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="lastName">Nachname</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="street">Straße</label>
                <input type="text" name="street" id="street" defaultValue="" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="postCode">Postleitzahl</label>
                <input type="text" name="postCode" id="postCode" defaultValue="" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="city">Stadt</label>
                <input type="text" name="city" id="city" defaultValue="" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="phone">Telefon</label>
                <input type="text" name="phone" id="phone" defaultValue="" onChange={handleChange}></input>
            </div>
        </fieldset>
        <div className="button-container">
            <button type="submit">Registrieren</button>
        </div>
      </form>
    </div>
  )
}