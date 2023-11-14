import {Route, Routes} from "react-router-dom";
import MemberLoginPage from "../pages/auth/MemberLoginPage";
import MemberSignUpPage from "../pages/auth/MemberSignUpPage";
import StaffSignUpPage from "../pages/auth/StaffSignUpPage";
import StaffLoginPage from "../pages/auth/StaffLoginPage";

const AuthRoutes = () => {
    return (
            <Routes>
                <Route path="login/*">
                    <Route path="member" element={<MemberLoginPage/>}/>
                    <Route path="staff" element={<StaffLoginPage/>}/>
                </Route>
                <Route path="signup/*">
                    <Route path="member" element={<MemberSignUpPage/>}/>
                    <Route path="staff" element={<StaffSignUpPage/>}/>
                </Route>
            </Routes>
    );
};

export default AuthRoutes;