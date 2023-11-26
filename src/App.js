import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import SearchPage from "./pages/search/SearchPage";
import ReviewRoutes from "./routes/ReviewRoutes";
import BoardRoutes from "./routes/BoardRoutes";
import HealthInfoPage from "./pages/health-info/HealthInfoPage";
import AuthRoutes from "./routes/AuthRoutes";
import Layout from "./layout/Layout";
import {DeptContextProvider} from "./context/DeptContext";

const App = () => {
    return (
        <DeptContextProvider>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path='/reviews/*' element={<ReviewRoutes/>}/>
                    <Route path="/boards/*" element={<BoardRoutes/>}/>
                    <Route path="/health-infos" element={<HealthInfoPage/>}/>
                    <Route path="/auth/*" element={<AuthRoutes/>}/>
                </Route>
            </Routes>
        </DeptContextProvider>
    );
};

export default App;