import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import loading from "./loading";
import auth, {authSaga} from "./auth";
import search, {searchSaga} from "./search";
import review, {reviewSaga} from "./review";
import board, {boardSaga} from "./board";

const rootReducer = combineReducers({
    loading,
    auth,
    search,
    review,
    board,
});

export function* rootSaga() {
    yield all([authSaga(), searchSaga(), reviewSaga(), boardSaga()]);
}

export default rootReducer;