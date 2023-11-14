import {Route, Routes} from "react-router-dom";
import ReviewPage from "../pages/ReviewPage";
import ReviewListPage from "../pages/review/ReviewListPage";

const ReviewRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<ReviewListPage/>}/>
            <Route path='/:id' element={<ReviewPage/>}/>
        </Routes>
    );
};

export default ReviewRoutes;