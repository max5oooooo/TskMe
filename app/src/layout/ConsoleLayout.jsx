import { Outlet } from "react-router-dom"
import Sidebar from "../components/console/Sidebar"

const ConsoleLayout = () => {
    return (
        <>
            <div className="flex w-screen h-screen overflow-hidden">
                <Sidebar />
                <div className="flex-grow flex justify-center overflow-x-hidden overflow-y-auto bg-slate-50">
                    <div className="w-full max-w-[100%] lg:max-w-[90%] xl:max-w-[70%] p-6 py-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsoleLayout