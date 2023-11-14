import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/boards';
import {takeLatest} from 'redux-saga/effects';

const INITIALIZE = 'board/INITIALIZE';
const CHANGE_FIELD = 'board/CHANGE_FIELD';
const [
    BOARD_POST,
    BOARD_POST_SUCCESS,
    BOARD_POST_FAILURE,
] = createRequestActionTypes('board/BOARD_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const boardPost = createAction(BOARD_POST, ({ title, body }) => ({
    title,
    body,
}));

const boardPostSaga = createRequestSaga(BOARD_POST, postsAPI.boardPost);
export function* boardSaga() {
    yield takeLatest(BOARD_POST, boardPostSaga);
}

const initialState = {
    title: '',
    body: '',
    post: null,
    postError: null,
};

const board = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: {key, value} }) => ({
            ...state,
            [key]: value,
        }),
        [BOARD_POST]: state => ({
            ...state,
            post: null,
            postError: null,
        }),
        // 포스트 작성 성공
        [BOARD_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        // 포스트 작성 실패
        [BOARD_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
    },
    initialState,
);

export default board;