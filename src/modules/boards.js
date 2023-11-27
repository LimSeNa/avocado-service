import {createAction, handleActions} from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';

const INITIALIZE = 'boards/INITIALIZE';
const [READ_BOARD_LIST, READ_BOARD_LIST_SUCCESS, READ_BOARD_LIST_FAILURE] = createRequestActionTypes('boards/READ_BOARD_LIST');

export const initialize = createAction(INITIALIZE);
export const readBoardList = createAction(
    READ_BOARD_LIST,
    (pageNum) => (pageNum)
);

const readBoardListSaga = createRequestSaga(READ_BOARD_LIST, boardAPI.readBoardList);
export function* boardsSaga() {
    yield takeLatest(READ_BOARD_LIST, readBoardListSaga);
}

const initialState = {
    boards: null,
    boardsError: null,
};

const boards = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [READ_BOARD_LIST_SUCCESS]: (state, {payload: boards}) => ({
            ...state,
            boards,
        }),
        [READ_BOARD_LIST_FAILURE]: (state, {payload: boardsError}) => ({
            ...state,
            boardsError,
        }),
    },
    initialState,
);

export default boards;