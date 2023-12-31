import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import loading from "./loading";
import auth, {authSaga} from "./auth";
import search, {searchSaga} from "./search";
import review, {reviewSaga} from "./review";
import board, {boardSaga} from "./board";
import boards, {boardsSaga} from "./boards";
import healthInfo, {healthInfoSaga} from "./healthInfo";
import reply, {replySaga} from "./reply";
import reviews, {reviewsSaga} from "./reviews";

const rootReducer = combineReducers({
    loading,
    auth,
    search,
    review,
    reviews,
    board,
    boards,
    healthInfo,
    reply,
});

export function* rootSaga() {
    yield all([authSaga(), searchSaga(), reviewSaga(), reviewsSaga(), boardSaga(), boardsSaga(),  healthInfoSaga(), replySaga()]);
}

export default rootReducer;