import { Link, useNavigate } from "react-router-dom";
import useDictionary from "../hook/useDictionary";
import { useDispatch } from "react-redux";
import svg from "../assets/img/LoginImg.svg";
import { useState } from "react";
import { login } from "../store/slices/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dictionary = useDictionary();

    const [form, setForm] = useState({
        first_name: "",
        password: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;

        setForm((form) => ({
            ...form,
            [name]: value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveRegister(form);
        setForm({
            first_name: "",
            password: "",
        });
    }
    
    const onSaveRegister = (form) => {
        console.log(form)
        dispatch(login({ token: "1234", user: { id: 1, first_name: "Giovanni", profile_image: null } }));
        navigate("/console")
      }


    return (
        <>
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-300 text-black">
                    <div className="max-w-md text-center">
                        <img src={svg} alt="Register image" />
                    </div>
                </div>
                <div className="w-full bg-primary lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">{dictionary.LOGIN_REGISTER_PAGE.LOG_IN}</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-black">{dictionary.LOGIN_REGISTER_PAGE.FORM_NAME}</label>
                                <input type="text" onInput={handleInput} value={form.first_name} id="first_name" name="first_name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                                <input type="password" onInput={handleInput} value={form.password} id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">{dictionary.LOGIN_REGISTER_PAGE.LOG_IN}</button>
                            </div>
                        </form>
                        <div className="mt-6 text-white text-center">
                        <p>{dictionary.LOGIN_REGISTER_PAGE.NOT_ACCOUNT} <Link to={"/register"} href="#" className="text-black hover:underline">{dictionary.LOGIN_REGISTER_PAGE.REGISTER_HERE}</Link>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage