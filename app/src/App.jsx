import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import RootLayout from "./layout/RootLayout"
import ConsoleLayout from "./layout/ConsoleLayout"

import Home from "./pages/Home"

import HomeConsole from "./pages/console/Home"
import ProfileConsole from "./pages/console/Profile"

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    if (auth.token) return children;
    else return <Navigate to="/" />
}

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="/console" element={
                    <ProtectedRoute>
                        <ConsoleLayout />
                    </ProtectedRoute>
                }>
                    <Route path="" element={<HomeConsole />} />
                    <Route path="profile" element={<ProfileConsole />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
