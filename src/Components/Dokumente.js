import React from 'react'
import '../Styles/dokumente.css';

export default function Dokumente({user}) {
  console.log(user);
  return (
    <div className="display" id='dokumente'>
      {
        user.resumes.length &&
            <section className="resume-frame">
                <h4>Lebensläufe</h4>
                 {user.resumes.length &&
                 user.resumes.map((resume) => {
                        return (resume.resName !== "") ?
                         (
                             <div key={resume._id} className="resume-card">
                                 <p><input type="checkbox" id={resume._id} /> {resume.resName}</p>
                              </div>
                          ) : "";
                      }
                 )}
             </section>
    }
    {
        user.certificates.length &&
            <section className="certificate-frame">
                <h4>Zertifikate</h4>
                 {user.certificates.length &&
                    user.certificates.map((certificate) => {
                        return (certificate.certName !== "") ?
                        (
                                <div key={certificate._id} className="certificate-card">
                                    <p><input type="checkbox" id={certificate._id} /> {certificate.certName}</p>
                                </div>
                        ) : "";
                    }
                 )}
            </section>
    }
    </div>
  )
}
