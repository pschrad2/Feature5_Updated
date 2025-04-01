import { useState } from 'react'
import React from "react";
import Parse from "parse";
import Components from "../Components/Components";



/*//////////////////LearnServices.js file
const getAllUsers = (myPost) => {
  const User = Parse.Object.extend("_User");
  const query = new Parse.Query(User);
  query.equalTo("post", myPost);
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};*/

const createUser = (username, password, email) => {
  const user = new Parse.User();

  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  return user.signUp().then((user) => {
    console.log(" User created:", user);
    return user;
  }).catch((error) => {
    console.error(" Error creating user:", error.message);
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
  //const [users, setUsers] = useState([]);
  //console.log("text printed");
  
  return <Components/>;
  
  
  
}

export default App;