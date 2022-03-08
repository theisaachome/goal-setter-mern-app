import {useState,useEffect} from 'react'
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmedPassword:""});
    const {username,email,password,confirmedPassword}=formData;

    const onChange=(e)=>{
      setFormData((prevState)=>(
        {
        ...prevState,
        [e.target.name]:e.target.value
       }))
    }
    const onSubmit = (e)=>{
      e.preventDefault();
    }
  return (
    <>
      <section className='heading'>
          <h1><FaUser/>Register</h1>
          <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
            type="text" 
            name="username" 
            id="username"
            value={username}
            placeholder="Enter Your name"
            onChange={onChange} />  
          </div>
          <div className="form-group">
            <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            placeholder="Enter Your email"
            onChange={onChange} />  
          </div>
          <div className="form-group">
            <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={onChange} />  
          </div>
          <div className="form-group">
            <input 
            type="password" 
            name="confirmedPassword" 
            id="confirmedPassword"
            value={confirmedPassword}
            placeholder="Confirm Your Password"
            onChange={onChange} />  
          </div>
          <div className="form-group">
            <button className='btn btn-block'>Register</button>
          </div>
        </form>  
      </section>
    </>
  )
}

export default Register