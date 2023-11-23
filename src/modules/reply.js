import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as replyAPI from "../lib/api/reply";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'reply/INITIALIZE';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';
const [WRITE_REPLY, WRITE_REPLY_SUCCESS, WRITE_REPLY_FAILURE] = createRequestActionTypes('reply/WRITE_REPLY');
const [READ_REPLY_LIST,READ_REPLY_LIST_SUCCESS, READ_REPLY_LIST_FAILURE] = createRequestActionTypes('reply/READ_REPLY_LIST');
const [READ_REPLY_DESC,READ_REPLY_DESC_SUCCESS, READ_REPLY_DESC_FAILURE] = createRequestActionTypes('reply/READ_REPLY_DESC');
const [READ_REPLY_ASC,READ_REPLY_ASC_SUCCESS, READ_REPLY_ASC_FAILURE] = createRequestActionTypes('reply/READ_REPLY_ASC');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({name, value}) => ({name, value})
);
export const writeReply = createAction(
    WRITE_REPLY,
    ({staffId, boardId, reply}) => ({staffId, boardId, reply})
);
export const readReplyList = createAction(
    READ_REPLY_LIST,
    (id) => (id)
);
export const readReplyDesc = createAction(
    READ_REPLY_DESC,
    (boardId) => (boardId)
);
export const readReplyAsc = createAction(
    READ_REPLY_ASC,
    (boardId) => (boardId)
);

const writeReplySaga = createRequestSaga(WRITE_REPLY, replyAPI.writeReply);
const readReplyListSaga = createRequestSaga(READ_REPLY_LIST, replyAPI.readReplyList);
const readReplyDescSaga = createRequestSaga(READ_REPLY_DESC, replyAPI.readReplyDesc);
const readReplyAscSaga = createRequestSaga(READ_REPLY_ASC, replyAPI.readReplyAsc);
export function* replySaga() {
    yield takeLatest(WRITE_REPLY, writeReplySaga);
    yield takeLatest(READ_REPLY_LIST, readReplyListSaga);
    yield takeLatest(READ_REPLY_DESC, readReplyDescSaga);
    yield takeLatest(READ_REPLY_ASC, readReplyAscSaga);
}

const initialState = {
    staffId: JSON.parse(localStorage.getItem('staff')) ? JSON.parse(localStorage.getItem('staff')).memberId : null,
    boardId: '',
    reply: '',
    comment: null,
    commentError: null,
};

const reply = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {name, value}}) => ({
            ...state,
            [name]: value
        }),
        [WRITE_REPLY_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [WRITE_REPLY_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
        [READ_REPLY_LIST_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [READ_REPLY_LIST_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
        [READ_REPLY_DESC_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [READ_REPLY_DESC_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
        [READ_REPLY_ASC_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [READ_REPLY_ASC_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
    },
    initialState,
);

export default reply;