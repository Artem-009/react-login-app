import './App.css';

import Input from "./components/Input";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <img src="./images/user-login.png" alt="Login user icon" />
      <form method="POST">
        <Input labelText="Username" inputId="username" />
        <Input labelText="Password" inputId="password" />
        <Options checkboxText="Remember me" forgotPasswordText="Forgot Password?" />
        <button className="login-btn" onClick={(e) => e.preventDefault()}>LOGIN</button>
      </form>
    </div>
  );
}

export default App;