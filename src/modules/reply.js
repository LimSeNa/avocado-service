import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as replyAPI from "../lib/api/reply";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'reply/INITIALIZE';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';
const [WRITE_REPLY, WRITE_REPLY_SUCCESS, WRITE_REPLY_FAILURE] = createRequestActionTypes('reply/WRITE_REPLY');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({name, value}) => ({name, value})
);
export const writeReply = createAction(
    WRITE_REPLY,
    ({staffId, boardId, reply}) => ({staffId, boardId, reply})
);

const writeReplySaga = createRequestSaga(WRITE_REPLY, replyAPI.writeReply);
export function* replySaga() {
    yield takeLatest(WRITE_REPLY, writeReplySaga);
}

const initialState = {
    staffId: JSON.parse(localStorage.getItem('staff')) ? JSON.parse(localStorage.getItem('staff')).memberId : null,
    boardId: '',
    reply: '',
    replySuccess: null,
    replyError: null,
};

const reply = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {name, value}}) => ({
            ...state,
            [name]: value
        }),
        [WRITE_REPLY_SUCCESS]: (state, {payload: replySuccess}) => ({
            ...state,
            replySuccess,
        }),
        [WRITE_REPLY_FAILURE]: (state, {payload: replyError}) => ({
            ...state,
            replyError,
        }),
    },
    initialState,
);

export default reply;