import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import boardEdit, {boardSaga} from "./board";
import loading from "./loading";
import boardList from "./boardList";
import {all} from "redux-saga/effects";
import search, {searchSaga} from "./search";
import review, {reviewSaga} from "./review";
import board from "./board";

const rootReducer = combineReducers({
    loading,
    auth,
    board,
    boardList,
    search,
    review,
});

export function* rootSaga() {
    yield all([authSaga(), boardSaga(), searchSaga(), reviewSaga()]);
}

export default rootReducer;