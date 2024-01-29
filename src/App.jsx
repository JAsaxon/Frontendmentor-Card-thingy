import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import avatar from "./assets/avatar.jpeg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="section">
      <div className="card">
        <img src={avatar} alt="avatar" />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <h3>"Front-end developer and avid reader."</h3>

        <div className="links">
          <a href="">Github</a>
          <a href="">Frontend Mentor</a>
          <a href="">Linkedin</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;
