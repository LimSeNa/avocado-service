import {Route, Routes} from "react-router-dom";
import Header from "./components/base/Header";
import MainPage from "./pages/main/MainPage";
import SearchPage from "./pages/search/SearchPage";
import ReviewRoutes from "./routes/ReviewRoutes";
import BoardRoutes from "./routes/BoardRoutes";
import HealthInfoPage from "./pages/health-info/HealthInfoPage";
import AuthRoutes from "./routes/AuthRoutes";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path='/reviews/*' element={<ReviewRoutes/>}/>
                <Route path="/boards/*" element={<BoardRoutes/>}/>
                <Route path="/health-infos" element={<HealthInfoPage/>}/>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
            </Routes>
        </>
    );
};

export default App;