import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as reviewAPI from "../lib/api/review";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'review/INITIALIZE';
const CHANGE_FIELD = 'review/CHANGE_FIELD';
const [POST_REVIEW, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE] = createRequestActionTypes('review/POST_REVIEW');
const [READ_REVIEW_DETAIL, READ_REVIEW_DETAIL_SUCCESS, READ_REVIEW_DETAIL_FAILURE] = createRequestActionTypes('review/READ_REVIEW_DETAIL');
const [READ_REVIEW_LIST,READ_REVIEW_LIST_SUCCESS, READ_REVIEW_LIST_FAILURE] = createRequestActionTypes('review/READ_REVIEW_LIST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({key, value})
);
export const postReview = createAction(
    POST_REVIEW,
    ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}) => ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}),
);
export const readReviewDetail = createAction(
    READ_REVIEW_DETAIL,
    id => id,
);

export const readReviewList = createAction(
    READ_REVIEW_LIST,
    (deptNum) => (deptNum)
);

// 사가 생성
const postReviewSaga = createRequestSaga(POST_REVIEW, reviewAPI.postReview);
const readReviewDetailSaga = createRequestSaga(READ_REVIEW_DETAIL, reviewAPI.readReviewDetail);
const readReviewListSaga = createRequestSaga(READ_REVIEW_LIST, reviewAPI.readReviewList);
export function* reviewSaga() {
    yield takeLatest(POST_REVIEW, postReviewSaga);
    yield takeLatest(READ_REVIEW_DETAIL, readReviewDetailSaga);
    yield takeLatest(READ_REVIEW_LIST, readReviewListSaga);
}

const initialState = {
    memberId: '',
    title: '',
    body: '',
    starPoint: 0,
    targetHospital: '',
    targetDept: '',
    photoPath: '',
    review: null,
    reviewError: null,
};

const review = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [POST_REVIEW_SUCCESS]: (state, {payload: review}) => ({
            ...state,
            review,
        }),
        [POST_REVIEW_FAILURE]: (state, {payload: reviewError}) => ({
            ...state,
            reviewError,
        }),
        [READ_REVIEW_DETAIL_SUCCESS]: (state, {payload: review}) => ({
            ...state,
            review,
        }),
        [READ_REVIEW_DETAIL_FAILURE]: (state, {payload: reviewError}) => ({
            ...state,
            reviewError,
        }),
        [READ_REVIEW_LIST_SUCCESS]: (state, {payload: review}) => ({
            ...state,
            review,
        }),
        [READ_REVIEW_LIST_FAILURE]: (state, {payload: reviewError}) => ({
            ...state,
            reviewError,
        }),
    },
    initialState,
);

export default review;