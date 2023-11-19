import {createAction, handleActions} from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';

const INITIALIZE = 'board/INITIALIZE';
const CHANGE_FIELD = 'board/CHANGE_FIELD';
const [WRITE_BOARD, WRITE_BOARD_SUCCESS, WRITE_BOARD_FAILURE] = createRequestActionTypes('board/WRITE_BOARD');
const [READ_BOARD_LIST, READ_BOARD_LIST_SUCCESS, READ_BOARD_LIST_FAILURE] = createRequestActionTypes('board/READ_BOARD_LIST');
const [READ_BOARD_DETAIL, READ_BOARD_DETAIL_SUCCESS, READ_BOARD_DETAIL_FAILURE] = createRequestActionTypes('board/READ_BOARD_DETAIL');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({key, value})
);
export const writeBoard = createAction(
    WRITE_BOARD,
    ({memberId, title, body, dept}) => ({memberId, title, body, dept})
);
export const readBoardList = createAction(READ_BOARD_LIST);
export const readBoardDetail = createAction(
    READ_BOARD_DETAIL,
    (id) => (id)
);

const writeBoardSaga = createRequestSaga(WRITE_BOARD, boardAPI.writeBoard);
const readBoardListSaga = createRequestSaga(READ_BOARD_LIST, boardAPI.readBoardList);
const readBoardDetailSaga = createRequestSaga(READ_BOARD_DETAIL, boardAPI.readBoardDetail);
export function* boardSaga() {
    yield takeLatest(WRITE_BOARD, writeBoardSaga);
    yield takeLatest(READ_BOARD_LIST, readBoardListSaga);
    yield takeLatest(READ_BOARD_DETAIL, readBoardDetailSaga);
}

const initialState = {
    memberId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).memberId : '',
    title: '',
    body: '',
    dept: '',
    board: null,
    boardError: null,
};

const board = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_BOARD_SUCCESS]: (state, {payload: board}) => ({
            ...state,
            board,
        }),
        [WRITE_BOARD_FAILURE]: (state, {payload: boardError}) => ({
            ...state,
            boardError,
        }),
        [READ_BOARD_LIST_SUCCESS]: (state, {payload: board}) => ({
            ...state,
            board,
        }),
        [READ_BOARD_LIST_FAILURE]: (state, {payload: boardError}) => ({
            ...state,
            boardError,
        }),
        [READ_BOARD_DETAIL_SUCCESS]: (state, {payload: board}) => ({
            ...state,
            board,
        }),
        [READ_BOARD_DETAIL_FAILURE]: (state, {payload: boardError}) => ({
            ...state,
            boardError,
        }),
    },
    initialState,
);

export default board;