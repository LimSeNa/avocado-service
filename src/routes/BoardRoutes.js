import {Route, Routes} from "react-router-dom";
import BoardListPage from "../pages/boards/BoardListPage";
import BoardDetailPage from "../pages/board/BoardDetailPage";
import BoardWritePage from "../pages/board/BoardWritePage";

const BoardRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<BoardListPage/>}/>
            <Route path=":id/details" element={<BoardDetailPage/>}/>
            <Route path="write" element={<BoardWritePage/>}/>
        </Routes>
    );
};

export default BoardRoutes;