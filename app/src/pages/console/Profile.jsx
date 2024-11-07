import { useSelector } from "react-redux"
import ConsoleContentBox from "../../components/shared/ConsoleContentBox"
import { updateEmail, updateFirstName, updateLastName } from "../../store/slices/userSlice"
import { useDispatch } from "react-redux"
import useDictionary from "../../hook/useDictionary"

const ProfileConsole = () => {
    const dictionary = useDictionary();
    const dispatch = useDispatch();

    const firstName = useSelector((store) => store.user.firstName)
    const lastName = useSelector((store) => store.user.lastName)
    const email = useSelector((store) => store.user.email)
    const telefono = useSelector((store) => store.user.telefono)
    const roles = useSelector((store) => store.user.roles)
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

    const handleBirthday = ((event) => {
        dispatch(updateBirthday(event.target.value))
    })

    return (
        <>
            <div>
                <h2 className="text-3xl font-bold">Profile</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <ConsoleContentBox>
                    <form action="">
                        <div className="my-4 ">
                            <img className="rounded-full w-1/6 " src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                        </div>
                        <div>
                            <input className="py-2.5 px-0  text-xl text-black bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleFirstName} value={firstName} type="text" id="firstname" placeholder="Giovanni" />
                            <input className="py-2.5 px-0  text-xl text-black bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleLastName} value={lastName} type="text" id="lastname" placeholder="Turacci" />
                        </div>
                        <div>
                            <label className="text-xl italic block" htmlFor="email">{dictionary.PROFILE.EMAIL}</label>
                            <input className="block py-2.5 px-0 w-1/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleEmail} value={email} type="email" name="email" id="email" placeholder="Giovanni_turacci@outlook.it" />
                        </div>
                        <label className="text-xl italic block" htmlFor="telefono">{dictionary.PROFILE.TEL}</label>
                        <input className="block py-2.5 px-0 w-1/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleTelefono} value={telefono} type="tel" name="tel" id="tel" placeholder="+39 331 2354024" />
                        <div>
                            <label className="text-xl italic block" htmlFor="roles">Roles</label>
                            <select className="block py-2.5 px-0 w-1/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleRoles} value={roles} name="roles" id="">
                                <option value="owner">Owner</option>
                                <option value="collaborator">Collaborator</option>
                            </select>
                        </div>
                        <label className="text-xl italic block" htmlFor="date">Birthday</label>
                        <input className="block py-2.5 px-0 w-1/5 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" onChange={handleBirthday} value={birthday} type="date" name="date" id="date" />
                        <h3>General Information</h3>
                        <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.

Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150 block my-4" type="button">Save</button>
                    </form>
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default ProfileConsole