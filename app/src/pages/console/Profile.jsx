import { useState } from "react";
import ConsoleContentBox from "../../components/shared/ConsoleContentBox";
import useDictionary from "../../hook/useDictionary";
import { toast } from "react-toastify";
import { SDK } from "../../sdk";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/authSlice";

const ProfileConsole = () => {
    const dispatch = useDispatch()
    const dictionary = useDictionary();
    const auth = useSelector((state) => state.auth);
    const [form, setForm] = useState({
        first_name: auth.user.first_name || "",
        last_name: auth.user.last_name || "",
        email: auth.user.email || "",
        description: auth.user.description || "",
        password: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target; 

        setForm((form) => ({
            ...form,
            [name]: value
        }))
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await SDK.users.updateProfile(form, auth.token);
            const { password, ...userUpdated } = form;
            dispatch(updateUser(userUpdated));
            toast.success(dictionary.NOTIFICATIONS.USER_PROFILE_UPDATE_SUCCESS)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <>
            <div>
                <h2 className="text-3xl font-bold">{dictionary.PROFILE.TITLEPROFILE}</h2>
                <p>{dictionary.PROFILE.SUBTITLE}</p>
            </div>
            <div>
                <ConsoleContentBox >
                    <form onSubmit={handleSubmit} >
                        <div className="flex gap-12">
                            <div className="w-1/3 flex flex-col gap-6">
                                <div className="my-4 ">
                                    <img className="rounded-full w-1/6 " src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="first_name">{dictionary.PROFILE.FIRSTNAME}</label>
                                    <input className="block w-full py-2.5 px-2 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.first_name}  name="first_name" type="text" placeholder="Giovanni" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="last_name">{dictionary.PROFILE.LASTNAME}</label>
                                    <input className="block w-full py-2.5 px-2 text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.last_name}  name="last_name" placeholder="Turacci" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="email">{dictionary.PROFILE.EMAIL}</label>
                                    <input className="block w-full py-2.5 px-2 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.email}  name="email" type="email" placeholder="giovanni_turacci@outlook.it" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="telefono">{dictionary.PROFILE.PASSWORD}</label>
                                    <input className="block w-full py-2.5 px-2 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.password}  name="password" type="password" placeholder="**********" />
                                </div>
                                
                            </div>
                            <div className="w-2/3 my-4">
                                <h2 className="text-2xl font-bold">{dictionary.PROFILE.GENERALINFORMATION}</h2>
                                <h3 className="text-xl font-bold mt-8">{dictionary.PROFILE.GENERALABOUTME}</h3>
                                <textarea className="text-xl italic mt-7 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder={dictionary.PROFILE.GENERALABOUTME} onInput={handleInput} name="description" value={form.description}></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 block my-4" type="submit">{dictionary.PROFILE.BUTTON}</button>
                        </div>
                    </form>
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default ProfileConsole