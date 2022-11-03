import React from 'react'
import '../Styles/dokumente.css';

export default function Dokumente({user}) {
  console.log(user);
  return (
    <div className="display" id='dokumente'>
      {
        user.resumes.length > 0 &&
            <section className="resume-frame">
                <h4>Lebensläufe</h4>
                 {user.resumes.length &&
                 user.resumes.map((resume) => {
                        return (resume.resName !== "") ?
                         (
                             <p><input type="checkbox" id={resume._id} /> {resume.resName}</p>
                          ) : "";
                      }
                 )}
             </section>
    }
    {
        user.certificates.length > 0 &&
            <section className="certificate-frame">
                <h4>Zertifikate</h4>
                 {user.certificates.length > 0 &&
                    user.certificates.map((certificate) => {
                        return (certificate.certName !== "") ?
                        (
                                <p><input type="checkbox" id={certificate._id} /> {certificate.certName}</p>
                        ) : "";
                    }
                 )}
            </section>
    }
    </div>
  )
}
