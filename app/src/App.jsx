import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import RootLayout from "./layout/RootLayout"
import ConsoleLayout from "./layout/ConsoleLayout"

import Home from "./pages/Home"

import HomeConsole from "./pages/console/Home"
import ProfileConsole from "./pages/console/Profile"
import AnalitycsConsole from "./pages/console/Analitycs"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

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
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/console" element={
                    <ProtectedRoute>
                        <ConsoleLayout />
                    </ProtectedRoute>
                }>
                    <Route path="" element={<HomeConsole />} />
                    <Route path="analitycs" element={<AnalitycsConsole />} />
                    <Route path="profile" element={<ProfileConsole />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
