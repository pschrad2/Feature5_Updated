import React from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";


const AuthLoggedin = ({ user, isLogin, onChange, onSubmit }) => {
  const navigate = useNavigate(); 

   // Sign out the user
   const handleSignOut = () => {
    Parse.User.logOut().then(() => {
      // After logout, navigate to the login page
      alert("You have been logged out.");
      navigate("/auth/login");
    }).catch((error) => {
      alert("Error logging out: " + error.message);
    });
  };



  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Beautiful Page</h1>
        <p className="intro-text">A simple, clean page layout using React and CSS</p>
      </header>
      
      <main className="main-content">
      <button onClick={handleFetchUsers}>Get All Users</button>
        <section className="section">
          <h2>Why Simple Pages Matter</h2>
          <p>
            Simplicity is often the key to effective design. A clean, minimalist layout ensures that the message is clear, and the user can navigate easily. On this page, we focus on a simple design that communicates the content without distraction.
          </p>
        </section>

        <section className="section">
          <h2>Key Design Principles</h2>
          <ul>
            <li>Whitespace enhances readability.</li>
            <li>Typography plays an important role in guiding the reader’s eye.</li>
            <li>A limited color palette keeps the design cohesive.</li>
          </ul>
        </section>

         {/* Sign Out Button */}
         <section className="section">
          <button onClick={handleSignOut}>Sign Out</button>
        </section>
      </main>

      <footer className="footer">
        <p>Designed with love by Your Name</p>
      </footer>
    </div>

  );
};

export default AuthLoggedin;