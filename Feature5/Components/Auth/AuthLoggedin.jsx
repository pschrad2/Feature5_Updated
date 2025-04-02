import React from "react";

const AuthLoggedin = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Beautiful Page</h1>
        <p className="intro-text">A simple, clean page layout using React and CSS</p>
      </header>
      
      <main className="main-content">
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
      </main>

      <footer className="footer">
        <p>Designed with love by Your Name</p>
      </footer>
    </div>

  );
};

export default AuthLoggedin;