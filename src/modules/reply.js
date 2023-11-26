import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as replyAPI from "../lib/api/reply";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'reply/INITIALIZE';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';
const [WRITE_REPLY, WRITE_REPLY_SUCCESS, WRITE_REPLY_FAILURE] = createRequestActionTypes('reply/WRITE_REPLY');
const [READ_REPLY_DESC,READ_REPLY_DESC_SUCCESS, READ_REPLY_DESC_FAILURE] = createRequestActionTypes('reply/READ_REPLY_DESC');
const [READ_REPLY_ASC,READ_REPLY_ASC_SUCCESS, READ_REPLY_ASC_FAILURE] = createRequestActionTypes('reply/READ_REPLY_ASC');
const [WRITE_REVIEW_REPLY, WRITE_REVIEW_REPLY_SUCCESS, WRITE_REVIEW_REPLY_FAILURE] = createRequestActionTypes('reply/WRITE_REVIEW_REPLY');
const [READ_REVIEW_REPLY_DESC,READ_REVIEW_REPLY_DESC_SUCCESS, READ_REVIEW_REPLY_DESC_FAILURE] = createRequestActionTypes('reply/READ_REVIEW_REPLY_DESC');
const [READ_REVIEW_REPLY_ASC,READ_REVIEW_REPLY_ASC_SUCCESS, READ_REVIEW_REPLY_ASC_FAILURE] = createRequestActionTypes('reply/READ_REVIEW_REPLY_ASC');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({name, value}) => ({name, value})
);
export const writeReply = createAction(
    WRITE_REPLY,
    ({staffId, boardId, reply}) => ({staffId, boardId, reply})
);
export const readReplyDesc = createAction(
    READ_REPLY_DESC,
    (boardId) => (boardId)
);
export const readReplyAsc = createAction(
    READ_REPLY_ASC,
    (boardId) => (boardId)
);
export const writeReviewReply = createAction(
    WRITE_REVIEW_REPLY,
    ({memberId, reviewId, reply}) => ({memberId, reviewId, reply})
);
export const readReviewReplyDesc = createAction(
    READ_REVIEW_REPLY_DESC,
    (reviewId) => (reviewId)
);
export const readReviewReplyAsc = createAction(
    READ_REVIEW_REPLY_ASC,
    (reviewId) => (reviewId)
);

const writeReplySaga = createRequestSaga(WRITE_REPLY, replyAPI.writeReply);
const readReplyDescSaga = createRequestSaga(READ_REPLY_DESC, replyAPI.readReplyDesc);
const readReplyAscSaga = createRequestSaga(READ_REPLY_ASC, replyAPI.readReplyAsc);
const writeReviewReplySaga = createRequestSaga(WRITE_REVIEW_REPLY, replyAPI.writeReviewReply);
const readReviewReplyDescSaga = createRequestSaga(READ_REVIEW_REPLY_DESC, replyAPI.readReviewReplyDesc);
const readReviewReplyAscSaga = createRequestSaga(READ_REVIEW_REPLY_ASC, replyAPI.readReviewReplyAsc);
export function* replySaga() {
    yield takeLatest(WRITE_REPLY, writeReplySaga);
    yield takeLatest(READ_REPLY_DESC, readReplyDescSaga);
    yield takeLatest(READ_REPLY_ASC, readReplyAscSaga);
    yield takeLatest(WRITE_REVIEW_REPLY, writeReviewReplySaga);
    yield takeLatest(READ_REVIEW_REPLY_DESC, readReviewReplyDescSaga);
    yield takeLatest(READ_REVIEW_REPLY_ASC, readReviewReplyAscSaga);
}

const initialState = {
    staffId: JSON.parse(localStorage.getItem('staff')) ? JSON.parse(localStorage.getItem('staff')).memberId : '',
    memberId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).memberId : '',
    boardId: '',
    reviewId: '',
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
            reply: '',
            comment,
        }),
        [WRITE_REPLY_FAILURE]: (state, {payload: commentError}) => ({
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
        [WRITE_REVIEW_REPLY_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            reply: '',
            comment,
        }),
        [WRITE_REVIEW_REPLY_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
        [READ_REVIEW_REPLY_DESC_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [READ_REVIEW_REPLY_DESC_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
        [READ_REVIEW_REPLY_ASC_SUCCESS]: (state, {payload: comment}) => ({
            ...state,
            comment,
        }),
        [READ_REVIEW_REPLY_ASC_FAILURE]: (state, {payload: commentError}) => ({
            ...state,
            commentError,
        }),
    },
    initialState,
);

export default reply;