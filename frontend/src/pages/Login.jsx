import {useState,useEffect} from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Login =() => {
  const [formData, setFormData] = useState({
    email:"",
    password:"",});
    const {email,password}=formData;

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
          <h1><FaSignInAlt/>Login</h1>
          <p>Please Login with your Account.</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
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
            <button className='btn btn-block'>Login</button>
          </div>
        </form>  
      </section>
    </>
  )
}
export default Login