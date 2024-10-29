import { useSelector } from "react-redux"
import ProfileImagePlaceholder from "../shared/ProfileImagePlaceholder"
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../shared/LogoutButton";
import ActionButton from "../shared/ActionButton";
import useDictionary from "../../hook/useDictionary";
import SwitchLanguage from "../shared/SwitchLanguage";
import ConsoleModal from "./ConsoleModal";
import { useState } from "react";

const SidebarButton = ({ to, children }) => {
    const location = useLocation();

    const formatClassName = () => {
        return `flex gap-3 items-center cursor-pointer rounded-full w-full p-3 px-6 transition-all hover:bg-slate-100 text-lg font-normal${location.pathname == to ? " bg-slate-100" : ""}`;
    }

    return (
        <>
            <Link to={to} className={formatClassName()}>
                {children}
            </Link>
        </>
    )
}

const Sidebar = () => {
    const dictionary = useDictionary();
    const user = useSelector((state) => state.auth.user);
    const [isOpenModal, setIsOpenModal] = useState();

    const handleSaveModal = (formData) => {
        console.log(formData)
        setIsOpenModal(false)
    }

    return (
        <>
            <div className="bg-white w-[250px] h-full flex flex-col justify-between">
                <div className="flex flex-col">
                    <div className="p-4">
                        <h3 className="text-primary flex gap-2 text-2xl items-center font-bold">
                            <i className="fa-regular fa-lemon"></i>
                            <span>TskMe</span>
                        </h3>
                    </div>
                    <div className="p-4 flex flex-col">
                        <div className="flex">
                            <ActionButton onClick={() => setIsOpenModal(true)}>
                                <i className="fa-solid fa-plus text-primary"></i>
                                <span>{dictionary.CONSOLE.CREATE_BTN}</span>
                            </ActionButton>
                        </div>
                        <div className="flex flex-col mt-8 gap-2">
                            <SidebarButton to="/console">
                                <i className="fa-solid fa-gauge text-primary"></i>
                                {dictionary.CONSOLE.SIDE_MENU_DASHBOARD}
                            </SidebarButton>
                            <SidebarButton to="/console/analitycs">
                                <i className="fa-solid fa-chart-column text-primary"></i>
                                {dictionary.CONSOLE.SIDE_MENU_ANALYTICS}
                            </SidebarButton>
                            <SidebarButton to="/console/profile">
                                <i className="fa-regular fa-user text-primary"></i>
                                {dictionary.CONSOLE.SIDE_MENU_PROFILE}
                            </SidebarButton>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex gap-2 items-center justify-between">
                        <Link to="/console/profile" className="flex gap-2 items-center">
                            <ProfileImagePlaceholder src={user.profile_image} alt="User profile image" />
                            <span>{user.first_name}</span>
                        </Link>
                        <SwitchLanguage />
                        <span>|</span>
                        <LogoutButton />
                    </div>
                </div>
            </div>
            <ConsoleModal isOpen={isOpenModal} onCloseModal={() => setIsOpenModal(false)} onSaveModal={handleSaveModal} />
        </>
    )
}

export default Sidebar