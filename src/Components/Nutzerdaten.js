
import { useState } from "react";
import { updateUser } from "../utils/dbUtils";
import "../Styles/forms.css";


export default function Nutzerdaten({user}) {

    console.log('user in nutzerdaten', user);

    const [{ email, firstName, lastName, postCode, street, city, phone, file_type }, setFormState] = useState({
        email: user.address.email,
        firstName: user.firstName,
        lastName: user.lastName,
        postCode: user.address.postCode,
        street: user.address.street,
        city: user.address.city,
        phone: user.address.phone[0],
        file_type: "resumes"
      });
      
      console.log(file_type);

      const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      const handleSubmit = async (e) => {
        try {
          e.preventDefault();

          if (!email) return alert("Please fill out all the fields");
          const formDataJson = JSON.stringify({
            "id" : user._id,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "address": {
                "postCode": postCode,
                "street": street,
                "city": city,
                "email": email,
                "phone": [phone]
            }
        });
        console.log(formDataJson);
          const { returnDataJson, error } = await updateUser(formDataJson);
          if (error) {
            console.log(error.message);
          }
          console.log("returnDataJson", returnDataJson);
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div className="registration">
        <h1>Meine Informationen</h1>
        <div className="form-container">
        <form className="registration-form" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Persönliche Daten</legend>
            <div>
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange}></input>
            </div>
            {/* 
            <div>
                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange}></input>
            </div> */}
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
                <input type="text" name="street" id="street" value={street} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="postCode">Postleitzahl</label>
                <input type="text" name="postCode" id="postCode" value={postCode} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="city">Stadt</label>
                <input type="text" name="city" id="city" value={city} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="phone">Telefon</label>
                <input type="text" name="phone" id="phone" value={phone} onChange={handleChange}></input>
            </div>
        </fieldset>
        <div className="button-container">
            <button type="submit">Änderungen speichern</button>
        </div>
      </form>

            

    <form className="registration-form" method="post" encType="multipart/form-data" action={ `${process.env.REACT_APP_PROJECT_API}/users/${user._id}/${file_type}` }>
        <div>
            {
                user.resumes.length > 0 &&
                    <div className="resume-frame">
                        <h3>Lebensläufe</h3>
                         {user.resumes.length &&
                         user.resumes.map((resume) => {
                                return (resume.resName !== "") ?
                                 (
                                     <div key={resume._id} className="resume-card">
                                         <p>{resume.resName}</p>
                                      </div>
                                  ) : "";
                              }
                         )}
                     </div>
            }
            {
                user.certificates.length > 0 &&
                    <div className="certificate-frame">
                        <h3>Zertifikate</h3>
                         {user.certificates.length &&
                            user.certificates.map((certificate) => {
                                return (certificate.certName !== "") ?
                                (
                                        <div key={certificate._id} className="certificate-card">
                                            <p>{certificate.certName}</p>
                                        </div>
                                ) : "";
                            }
                         )}
                    </div>
            }
          
        </div>

        <fieldset>
            <legend>Persönliche Dokumente</legend>
            <div>
                    <select name="file_type" accept=".doc,.docx,.pdf,.txt,.xls,.xlsx,jpg,.png,.webp" id="file_type" value={file_type} onChange={handleChange}>
                        <option value="resumes">Lebenslauf</option>
                        <option value="certificates">Zertifikate</option>
                    </select>
                <input type="file" name="userfile" id="userfile" onChange={handleChange}></input>
            </div>
        </fieldset>
        <div className="button-container">
            <button type="submit">Datei hochladen</button>
        </div>
    </form>
    </div>
    </div>
  )
}