import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import ReviewWritePage from "./pages/ReviewWritePage";
import HealthInfoPage from "./pages/HealthInfoPage";
import BoardRoutes from "./routes/BoardRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import Header from "./components/base/Header";
import ReviewRoutes from "./routes/ReviewRoutes";
import SearchPage from "./pages/search/SearchPage";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/write/review" element={<ReviewWritePage/>}/>
                <Route path='/reviews/*' element={<ReviewRoutes/>}/>
                <Route path="/boards/*" element={<BoardRoutes/>}/>
                <Route path="/health-infos" element={<HealthInfoPage/>}/>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
            </Routes>
        </>
    );
};

export default App;