import { useSelector } from "react-redux"
import ConsoleContentBox from "../../components/shared/ConsoleContentBox"
import { updateEmail, updateFirstName, updateLastName, updateSex } from "../../store/slices/userSlice"
import { useDispatch } from "react-redux"
import useDictionary from "../../hook/useDictionary"
import dict from "../../lang/dict"

const ProfileConsole = () => {
    const dictionary = useDictionary();
    const dispatch = useDispatch();

    const firstName = useSelector((store) => store.user.firstName)
    const lastName = useSelector((store) => store.user.lastName)
    const email = useSelector((store) => store.user.email)
    const telefono = useSelector((store) => store.user.telefono)
    const roles = useSelector((store) => store.user.roles)
    const sex = useSelector((store) => store.user.sex)
    const birthday = useSelector((store) => store.user.birthday)

    const handleFirstName = ((event) => {
        dispatch(updateFirstName(event.target.value))
    })

    const handleLastName = ((event) => {
        dispatch(updateLastName(event.target.value))
    })

    const handleEmail = ((event) => {
        dispatch(updateEmail(event.target.value))
    })

    const handleTelefono = ((event) => {
        dispatch(updateTelefono(event.target.value))
    })

    const handleRoles = ((event) => {
        dispatch(updateRoles(event.target.value))
    })

    const handleSex = ((event) => {
        dispatch(updateSex(event.target.value))
    })

    const handleBirthday = ((event) => {
        dispatch(updateBirthday(event.target.value))
    })

    return (
        <>
            <div>
                <h2 className="text-3xl font-bold">{dictionary.PROFILE.TITLEPROFILE}</h2>
                <p>{dictionary.PROFILE.SUBTITLE}</p>
            </div>
            <div>
                <ConsoleContentBox >
                    <form action="" >
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="my-4 ">
                                    <img className="rounded-full w-1/6 " src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="firstname">{dictionary.PROFILE.FIRSTNAME}</label>
                                    <input className="block cursor-pointer  py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleFirstName} value={firstName} type="text" id="firstname" placeholder="Giovanni" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="lastname">{dictionary.PROFILE.LASTNAME}</label>
                                    <input className="block cursor-pointer  py-2.5 px-0 w-3/5 text-xl text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleLastName} value={lastName} type="text" id="lastname" placeholder="Turacci" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="email">{dictionary.PROFILE.EMAIL}</label>
                                    <input className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleEmail} value={email} type="email" name="email" id="email" placeholder="Giovanni_turacci@outlook.it" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="telefono">{dictionary.PROFILE.TEL}</label>
                                    <input className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleTelefono} value={telefono} type="tel" name="tel" id="tel" placeholder="+39 331 2354024" />
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="roles">{dictionary.PROFILE.ROLES}</label>
                                    <select className="block cursor-pointer  py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleRoles} value={roles} name="Roles" id="">
                                        <option value="owner">{dictionary.PROFILE.OWNER}</option>
                                        <option value="collaborator">{dictionary.PROFILE.COLLABORATOR}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="Sex">{dictionary.PROFILE.SEX}</label>
                                    <select className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleSex} value={sex} name="Sex" id="">
                                        <option value="Man">{dictionary.PROFILE.MAN}</option>
                                        <option value="Woman">{dictionary.PROFILE.WOMAN}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xl italic block" htmlFor="date">{dictionary.PROFILE.BIRTHDAY}</label>
                                    <input className="block cursor-pointer py-2.5 px-0 w-3/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleBirthday} value={birthday} type="date" name="date" id="date" />
                                </div>
                            </div>
                            <div className="w-1/2 my-4">
                                <h2 className="text-2xl font-bold">{dictionary.PROFILE.GENERALINFORMATION}</h2>
                                <h3 className="text-xl font-bold mt-8">{dictionary.PROFILE.GENERALABOUTME}</h3>
                                <p className="text-xl italic mt-7">{dictionary.PROFILE.GENERALTEXT}</p>
                            </div>
                        </div>
                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150 block my-4" type="button">{dictionary.PROFILE.BUTTON}</button>
                    </form>
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default ProfileConsole