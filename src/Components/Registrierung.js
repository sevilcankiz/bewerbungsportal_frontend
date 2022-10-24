
import { useState } from "react";
import { registerUser } from "../utils/dbUtils";
import "../Styles/forms.css";


export default function Registrierung() {

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
          //if (!email || !password) return alert("Please fill out all the fields");
          const formDataJson = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "address": {
                "postCode": postCode,
                "street": street,
                "city": city,
                "email": email,
                "phone": [phone]
            },
            "certificates": [ { 
                "certName": "", 
                "certURL": ""
            } ],
            "resumes": [ { 
                "resName": "", 
                "resURL": ""
            } ] 
        });

          const { returnDataJson, error } = await registerUser(formDataJson);
          if (error) {
            console.log(error.message);
          }
          console.log("returnDataJson", returnDataJson);
          //localStorage.setItem("token", data.token);
          //setToken(data.token);
          //setIsAuthenticated(true);
        } catch (error) {
          console.log(error.message);
        }
      };


  return (
    <div className="registration form-container" onSubmit={handleSubmit}>
        <h1>Meine Informationen</h1>
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
            <div>
                <label htmlFor="firstName">Vorname</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="lastName">Nachname</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange}></input>
            </div>
        </fieldset>
        <fieldset>
            <legend>Adressdaten</legend>
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
        <fieldset>
            <legend>Zertifikate</legend>
            <div>
                <label htmlFor="certificates">Zertifikatsdatei hochladen</label>
                <input type="file" name="certificates" id="certificates" onChange={handleChange}></input>
            </div>
        </fieldset>
        <fieldset>
            <legend>Lebenslauf</legend>
            <div>
                <label htmlFor="resume">Lebenslaufdatei hochladen</label>
                <input type="file" name="resume" id="resume" onChange={handleChange}></input>
            </div>
        </fieldset>
        <div className="button-container">
            <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}