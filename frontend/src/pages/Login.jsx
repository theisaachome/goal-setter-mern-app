
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login,reset } from "../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Login =() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:"",
    password:"",});

    const {email,password}=formData;

    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.user? state.user:{});

    useEffect(() => {
      if(isError){
        toast.error(message)
      }
      if(isSuccess||user){
        navigate("/")
      }
      dispatch(reset());
    }, [user,isLoading,isError,isSuccess,message,dispatch,navigate])
    
    const onChange=(e)=>{
      setFormData((prevState)=>(
        {
        ...prevState,
        [e.target.name]:e.target.value
       }))
    }
    const onSubmit = (e)=>{
      e.preventDefault();
      const userData = {
        email,
        password,
      }
      dispatch(login(userData))
    }
    if(isLoading){
      return <Spinner/>
    }
  return (
    <>
      <section className='heading'>
          <h1>Login</h1>
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