import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";


const ProfileConsole = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <div>ProfileConsole</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ProfileConsole