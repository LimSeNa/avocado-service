import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import loading from "./loading";
import auth, {authSaga} from "./auth";
import search, {searchSaga} from "./search";
import review, {reviewSaga} from "./review";
import board, {boardSaga} from "./board";
import boards, {boardsSaga} from "./boards";
import healthInfo, {healthInfoSaga} from "./healthInfo";

const rootReducer = combineReducers({
    loading,
    auth,
    search,
    review,
    board,
    boards,
    healthInfo,
});

export function* rootSaga() {
    yield all([authSaga(), searchSaga(), reviewSaga(), boardSaga(), boardsSaga(),  healthInfoSaga()]);
}

export default rootReducer;