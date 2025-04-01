import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import AuthModule from "../Components/Auth/Auth.jsx";
import AuthRegister from "../Components/Auth/AuthRegister.jsx";
import AuthLogin from "../Components/Auth/AuthLogin.jsx";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute.jsx";
import Account from "../Components/Account.jsx";
import { getAllUsers } from "../Common/LearnServices";
import { checkUser } from "../Components/Auth/AuthService"; 


function MainComponent() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleFetchUsers = () => {
        getAllUsers().then((results) => {
            setUsers(results);
        });
    };

    const handleProtectedRouteClick = () => {
        if (checkUser()) {
            navigate("/account");
        } else {
            alert("You must log in to access this page."); // Alert for unauthenticated users
        }
    };

    return (
        <div>
            <h1>Hello, Parse!!</h1>
            <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQE6OKACUrsJWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694319042190?e=1749081600&v=beta&t=uA7ykLo9Hf_2725fNxQOTeg4ya7Qn8T-Xd8_Zk_MSnc"
                alt="Profile"
                width="300"
            />
            <button onClick={handleFetchUsers}>Get All Users</button>
            <button onClick={handleProtectedRouteClick}>Go to Protected Page</button>

            {users.length > 0 && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.get("username")}</li>
                    ))}
                </ul>
            )}

            <Routes>
                <Route path="/auth" element={<AuthModule />} />
                <Route path="/auth/register" element={<AuthRegister />} />
                <Route path="/auth/login" element={<AuthLogin />} />
                <Route path="/account" element={<ProtectedRoute element={Account} />} />
                <Route path="*" element={<Navigate to="/auth" replace />} />
            </Routes>
        </div>
    );
}
export default function Components() {
    return (
        <Router>
            <MainComponent />
        </Router>
    );
}