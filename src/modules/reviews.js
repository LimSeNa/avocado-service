import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as reviewAPI from "../lib/api/review";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'reviews/INITIALIZE';
const [READ_REVIEW_LIST, READ_REVIEW_LIST_SUCCESS, READ_REVIEW_LIST_FAILURE] = createRequestActionTypes('reviews/READ_REVIEW_LIST');

export const initialize = createAction(INITIALIZE);
export const readReviewList = createAction(
    READ_REVIEW_LIST,
    ({deptNum, pageNum}) => ({deptNum, pageNum})
);

const readReviewListSaga = createRequestSaga(READ_REVIEW_LIST, reviewAPI.readReviewList);
export function* reviewsSaga() {
    yield takeLatest(READ_REVIEW_LIST, readReviewListSaga);
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
    },
    initialState,
);

export default reviews;