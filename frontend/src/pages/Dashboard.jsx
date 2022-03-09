import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      console.log(message);
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
        <p>Goal Dashboard</p>
      </section>
      <div className="goal__button">
        <Link to="/newgoal">New Goal</Link>
        </div>
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {
              goals.map((goal)=>(<GoalItem key={goal._id} goal={goal}/>))
            }
            </div>
        ) : (
          <h3>You have not set any goal yet.</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
