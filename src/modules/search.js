import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as postAPI from "../lib/api/search";

const INITIALIZE = 'search/INITIALIZE';
const CHANGE_SYMPTOM = 'search/CHANGE_SYMPTOM';
const [SEARCH_POST, SEARCH_POST_SUCCESS, SEARCH_POST_FAILURE] = createRequestActionTypes('search/SEARCH_POST');

export const initialize = createAction(INITIALIZE);
export const changeSymptom = createAction(
    CHANGE_SYMPTOM,
    ({key, value}) => ({key, value})
);
export const searchPost = createAction(
    SEARCH_POST,
    symptom => symptom,
);

// 사가 생성
const searchPostSaga = createRequestSaga(SEARCH_POST, postAPI.searchPost);
export function* searchSaga() {
    yield takeLatest(SEARCH_POST, searchPostSaga);
}

const initialState = {
    symptom: '',
    message: null,
    messageError: null,
};

const search = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_SYMPTOM]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [SEARCH_POST_SUCCESS]: (state, {payload: {message}}) => ({
            ...state,
            message, // message: message 즉, initialState의 message에 서버에서 응답 받은 message를 저장
        }),
        [SEARCH_POST_FAILURE]: (state, {payload: {messageError}}) => ({
            ...state,
            messageError,
        })
    },
    initialState,
);

export default search;