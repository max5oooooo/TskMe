import { useState } from "react";
import svg from "../assets/img/RegisterImg.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import useDictionary from "../hook/useDictionary";


const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dictionary = useDictionary();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
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
            last_name: "",
            email: "",
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
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
                        <h1 className="text-sm font-semibold mb-6 text-black text-center">Join to Our Community with all time access and free </h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-black">Last Name</label>
                                <input type="text" onInput={handleInput} value={form.first_name}  id="first_name" name="first_name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required/>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-black">Last Name</label>
                                <input type="text" onInput={handleInput} value={form.last_name}  id="last_name" name="last_name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input type="text"onInput={handleInput} value={form.email}  id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                                <input type="password" onInput={handleInput} value={form.password}  id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required/>
                            </div>
                            <div>
                                <button type="submit"   className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-white text-center">
                            <p>Already have an account? <a href="#" className="text-black hover:underline">Login here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage