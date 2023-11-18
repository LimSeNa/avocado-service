import {createAction, handleActions} from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';

const INITIALIZE = 'board/INITIALIZE';
const CHANGE_FIELD = 'board/CHANGE_FIELD';
const [WRITE_BOARD, WRITE_BOARD_SUCCESS, WRITE_BOARD_FAILURE] = createRequestActionTypes('board/WRITE_BOARD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({key, value})
);
export const writeBoard = createAction(
    WRITE_BOARD,
    ({memberId, title, body, dept}) => ({memberId, title, body, dept})
);

const writeBoardSaga = createRequestSaga(WRITE_BOARD, boardAPI.writeBoard);
export function* boardSaga() {
    yield takeLatest(WRITE_BOARD, writeBoardSaga);
}

const initialState = {
    memberId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).memberId : '',
    title: '',
    body: '',
    dept: '',
    write: null,
    writeError: null,
};

const board = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_BOARD_SUCCESS]: (state, {payload: write}) => ({
            ...state,
            write,
        }),
        [WRITE_BOARD_FAILURE]: (state, {payload: writeError}) => ({
            ...state,
            writeError,
        }),
    },
    initialState,
);

export default board;