import { useState } from "react";
import ConsoleContentBox from "../../components/shared/ConsoleContentBox"
import useDictionary from "../../hook/useDictionary"

const ProfileConsole = () => {
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
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form)
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
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="my-4 ">
                                    <img className="rounded-full w-1/6 " src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="first_name">{dictionary.PROFILE.FIRSTNAME}</label>
                                    <input className="block cursor-pointer  py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.first_name}  name="first_name" type="text" placeholder="Giovanni" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="lastname">{dictionary.PROFILE.LASTNAME}</label>
                                    <input className="block cursor-pointer  py-2.5 px-0 w-3/5 text-xl text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.last_name}  name="last_name" placeholder="Turacci" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="email">{dictionary.PROFILE.EMAIL}</label>
                                    <input className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.email}  name="email" type="email" placeholder="giovanni_turacci@outlook.it" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="telefono">{dictionary.PROFILE.PASSWORD}</label>
                                    <input className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleInput} value={form.password}  name="password" type="password" placeholder="**********" />
                                </div>
                            </div>
                            <div className="w-1/2 my-4">
                                <h2 className="text-2xl font-bold">{dictionary.PROFILE.GENERALINFORMATION}</h2>
                                <h3 className="text-xl font-bold mt-8">{dictionary.PROFILE.GENERALABOUTME}</h3>
                                <p className="text-xl italic mt-7">{dictionary.PROFILE.GENERALTEXT}</p>
                            </div>
                        </div>
                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150 block my-4" type="submit">{dictionary.PROFILE.BUTTON}</button>
                    </form>
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default ProfileConsole