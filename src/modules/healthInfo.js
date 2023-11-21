import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as healthInfoAPI from "../lib/api/healthInfo";
import {takeLatest} from "redux-saga/effects";

const INITIALIZE = 'healthInfo/INITIALIZE';
const [READ_INFO_LIST, READ_INFO_LIST_SUCCESS, READ_INFO_LIST_FAILURE] = createRequestActionTypes('healthInfo/READ_INFO_LIST');

export const initialize = createAction(INITIALIZE);
export const readInfoList = createAction(
    READ_INFO_LIST,
    ({deptNum, page}) => ({deptNum, page})
);

const readInfoListSaga = createRequestSaga(READ_INFO_LIST, healthInfoAPI.readInfoList);
export function* healthInfoSaga() {
    yield takeLatest(READ_INFO_LIST, readInfoListSaga);
}

const initialState = {
    healthInfo: null,
    healthInfoError: null,
};

const healthInfo = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [READ_INFO_LIST_SUCCESS]: (state, {payload: healthInfo}) => ({
            ...state,
            healthInfo,
        }),
        [READ_INFO_LIST_FAILURE]: (state, {payload: healthInfoError}) => ({
            ...state,
            healthInfoError,
        }),
    },
    initialState,
);

export default healthInfo;
