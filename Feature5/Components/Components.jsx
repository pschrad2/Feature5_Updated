import React, { useEffect } from "react";
import { useState } from 'react'
//import * as Env from "./environments";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import AuthModule from "../Components/Auth/Auth.jsx";
import AuthRegister from "../Components/Auth/AuthRegister.jsx";
import AuthLogin from "../Components/Auth/AuthLogin.jsx";
import AuthLoggedin from "../Components/Auth/AuthLoggedin.jsx";
/*import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute.jsx";
import MainList from "../Components/Main/MainList.jsx";
*/

import {getAllUsers} from "../Common/LearnServices"


export default function Components() {

     const [users, setUsers] = useState([]);
      console.log("text printed");
     // Handle button click
  const handleFetchUsers = () => {
    getAllUsers().then((results) => {
      console.log(" Users:", results);
      setUsers(results); // store in state to display
      //createUser("janedoe", "securepassword123", "janedoe@example.com");
    });
  };
  return (
    <Router>
      <div>
        <h1>Hello, Parse!!</h1>
        <img
          src="https://pigment.github.io/fake-logos/logos/large/color/fast-banana.png"
          alt="Description of the image"
          width="300"
        />
        <button onClick={handleFetchUsers}>Get All Users</button>

        {/* Display the users if available */}
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.get("username")}</li>
            ))}
          </ul>
        )}

        <Routes>
          <Route path="/auth" element={<AuthModule />} />
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/auth/login" element={<AuthLogin/>}/>
          <Route path="/auth/loggedin" element={<AuthLoggedin/>}/>
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </div>
    </Router>
  );

 
  }