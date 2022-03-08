import {useEffect} from 'react';
import {  useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import GoalForm from '../components/GoalForm';

const Dashboard = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.auth);
  useEffect(() => {
   if(!user){
     navigate('/login');
   }
  }, [user,navigate])
  
  return (
    <>
      <section className="heading">
        <h1>Welcome {user&& user.username}</h1>
        <p>Goal Dashboard</p>
      </section>
      <GoalForm/>
    </>
  )
}

export default Dashboard