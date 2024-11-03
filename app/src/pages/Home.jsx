import { useDispatch } from "react-redux";
import useDictionary from "../hook/useDictionary";
import { login } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dictionary = useDictionary();

  const handleLogin = (form) => {
    console.log(form)
    dispatch(login({ token: "1234", user: { id: 1, first_name: "Giovanni", profile_image: null } }));
    navigate("/console")
  }

  return (
    <>
        <h1>{dictionary.HOME_CTA_TITLE}</h1>
        <Link to={"/register"}>Registrati Qui!</Link><br />
        <Link to={"/login"}>Login qui!</Link><br />
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Home