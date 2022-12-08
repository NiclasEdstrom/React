import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
    const adminUSer = {
      email: "niclas@hotmail.com",
      password: "niclas"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
      console.log(details);
      
      if (details.email === adminUSer.email && details.password === adminUSer.password){
        console.log("Inloggad");
        setUser({
          name: details.name,
          email: details.email
          
        });
        } else {
          console.log("Prova igen");
          setError("Prova igen")
          }
        } 
    
      const Logout = () => {
      setUser({name: "", email: ""});
    }

    return (
      <div className="App">
        {(user.email !== "") ? (
          <div className="welcome">
            <h2>Välkommen <span>{user.name}</span> Till Tennisklubben AB!</h2>
            <button onClick={Logout}>Logga ut</button>
          </div>
        
        ) : (
         <LoginForm Login={Login} error={error} />
        )}
      
        
      </div>

    
)}
export default App;
