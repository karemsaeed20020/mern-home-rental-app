import { useState } from 'react';
import '../styles/Login.scss';
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login_content">
        <form className='login_content_form'>
          <h1 style={{color: "white"}}>Login</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <a href="">Dont have an account? Sign Up</a>
      </div>
      
    </div>
  )
}

export default LoginPage
