import BoardEditPage from "../pages/BoardEditPage";
import {Route, Routes} from "react-router-dom";
import BoardPage from "../pages/BoardPage";

const BoardRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<BoardPage/>}/>
            <Route path="/edit" element={<BoardEditPage/>}/>
        </Routes>
    );
};

export default BoardRoutes;