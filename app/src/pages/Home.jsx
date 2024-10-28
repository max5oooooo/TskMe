import { useDispatch } from "react-redux";
import useDictionary from "../hook/useDictionary";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dictionary = useDictionary();

  const handleLogin = () => {
    dispatch(login({ token: "1234", user: { id: 1, first_name: "Giovanni", profile_image: null } }));
    navigate("/console")
  }

  return (
    <>
        <h1>{dictionary.HOME_CTA_TITLE}</h1>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Home