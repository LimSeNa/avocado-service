import {Route, Routes} from "react-router-dom";
import ReviewListPage from "../pages/review/ReviewListPage";
import ReviewDetailPage from "../pages/review/ReviewDetailPage";
import ReviewWritePage from "../pages/review/ReviewWritePage";

const ReviewRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<ReviewListPage/>}/>
            <Route path=':id' element={<ReviewDetailPage/>}/>
            <Route path='write' element={<ReviewWritePage/>}/>
        </Routes>
    );
};

export default ReviewRoutes;