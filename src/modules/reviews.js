import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as reviewAPI from "../lib/api/review";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'reviews/INITIALIZE';
const [READ_REVIEW_LIST, READ_REVIEW_LIST_SUCCESS, READ_REVIEW_LIST_FAILURE] = createRequestActionTypes('reviews/READ_REVIEW_LIST');
const [READ_REVIEW_HOSPITAL, READ_REVIEW_HOSPITAL_SUCCESS, READ_REVIEW_HOSPITAL_FAILURE] = createRequestActionTypes('reviews/READ_REVIEW_HOSPITAL');

export const initialize = createAction(INITIALIZE);
export const readReviewList = createAction(
    READ_REVIEW_LIST,
    ({deptNum, pageNum}) => ({deptNum, pageNum})
);
export const readReviewHospital = createAction(
    READ_REVIEW_HOSPITAL,
    ({targetHospital, pageNum}) => ({targetHospital, pageNum})
);

const readReviewListSaga = createRequestSaga(READ_REVIEW_LIST, reviewAPI.readReviewList);
const readReviewHospitalSaga = createRequestSaga(READ_REVIEW_HOSPITAL, reviewAPI.readReviewHospital);
export function* reviewsSaga() {
    yield takeLatest(READ_REVIEW_LIST, readReviewListSaga);
    yield takeLatest(READ_REVIEW_HOSPITAL, readReviewHospitalSaga);
}

const initialState = {
    reviews: null,
    reviewsError: null,
};

const reviews = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [READ_REVIEW_LIST_SUCCESS]: (state, {payload: reviews}) => ({
            ...state,
            reviews,
        }),
        [READ_REVIEW_LIST_FAILURE]: (state, {payload: reviewsError}) => ({
            ...state,
            reviewsError,
        }),
        [READ_REVIEW_HOSPITAL_SUCCESS]: (state, {payload: reviews}) => ({
            ...state,
            reviews,
        }),
        [READ_REVIEW_HOSPITAL_FAILURE]: (state, {payload: reviewsError}) => ({
            ...state,
            reviewsError,
        }),
    },
    initialState,
);

export default reviews;