import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <button onClick={handleLogout} className="text-slate-600">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    )
}

export default LogoutButton