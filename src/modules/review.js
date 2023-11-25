import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as reviewAPI from "../lib/api/review";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'review/INITIALIZE';
const CHANGE_FIELD = 'review/CHANGE_FIELD';
const [WRITE_REVIEW, WRITE_REVIEW_SUCCESS, WRITE_REVIEW_FAILURE] = createRequestActionTypes('review/WRITE_REVIEW');
const [READ_REVIEW_DETAIL, READ_REVIEW_DETAIL_SUCCESS, READ_REVIEW_DETAIL_FAILURE] = createRequestActionTypes('review/READ_REVIEW_DETAIL');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({key, value})
);
export const writeReview = createAction(
    WRITE_REVIEW,
    ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}) => ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}),
);
export const readReviewDetail = createAction(
    READ_REVIEW_DETAIL,
    id => id,
);

// 사가 생성
const writeReviewSaga = createRequestSaga(WRITE_REVIEW, reviewAPI.writeReview);
const readReviewDetailSaga = createRequestSaga(READ_REVIEW_DETAIL, reviewAPI.readReviewDetail);
export function* reviewSaga() {
    yield takeLatest(WRITE_REVIEW, writeReviewSaga);
    yield takeLatest(READ_REVIEW_DETAIL, readReviewDetailSaga);
}

const initialState = {
    memberId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).memberId : '',
    title: '',
    body: '',
    starPoint: 0,
    targetHospital: '',
    targetDept: '',
    photoPath: '12345',
    review: null,
    reviewError: null,
};

const review = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [WRITE_REVIEW_SUCCESS]: (state, {payload: review}) => ({
            ...state,
            review,
        }),
        [WRITE_REVIEW_FAILURE]: (state, {payload: reviewError}) => ({
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
    },
    initialState,
);

export default review;