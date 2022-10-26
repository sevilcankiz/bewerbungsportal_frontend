import { useEffect, useState } from "react";
import { getUser } from "./utils/dbUtils";
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const { content } = await getUser(token);

        console.log("content", content);

        setUser(content);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        console.log(error.message);
      }
    };

    token && validateToken();
  }, [token]);


  return (
    <div className="App">
      
      { isAuthenticated && user ? (
        <p>{user.address.email}</p>
        ) : (
          ""
        )}
      <Header />
      <Main isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />
      <Footer />
    </div>
  );
}

export default App;
