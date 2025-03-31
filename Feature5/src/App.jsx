import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from "react";
//import Components from "../Components/Components";
//import * as Env from "./environments";
import Parse from "parse/dist/parse.min.js";



///////////////////LearnServices.js file
const getAllUsers = (myPost) => {
  const User = Parse.Object.extend("_User");
  const query = new Parse.Query(User);
  query.equalTo("post", myPost);
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

const createUser = (username, password, email) => {
  const user = new Parse.User();

  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  return user.signUp().then((user) => {
    console.log("✅ User created:", user);
    return user;
  }).catch((error) => {
    console.error("❌ Error creating user:", error.message);
  });
};
////////////////////////

////////////////environments.js file
const Env  = {
  APPLICATION_ID: "IkqhJV1b14fA0wsFlJQWx68qtGMqX69DDuKpFtLz",
  JAVASCRIPT_KEY: "rnOwGARVOqijtgM8kZQFbp9jKfR9zoybJw13whBH",
  SERVER_URL: "https://parseapi.back4app.com/"
}
/////////////////

// init parse
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;
//

console.log(" Parse initialized");
function App() {
  //const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);
  console.log("text printed");
  //return <Components />;

  /*useEffect(() => {
    getAllUsers().then((users) => {
      console.log(users);
      setLessons(users);
    });

    
  }, []);*/
  // Handle button click
  const handleFetchUsers = () => {
    getAllUsers().then((results) => {
      console.log(" Users:", results);
      setUsers(results); // store in state to display
      //createUser("janedoe", "securepassword123", "janedoe@example.com");
    });
  };

  return (
    <div>
      <h1>Hello, Parse!</h1>
      <button onClick={handleFetchUsers}>Get All Users</button>

      {/* Display the users if available */}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.get("username")}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  
}

export default App;