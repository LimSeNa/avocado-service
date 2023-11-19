import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import {takeLatest} from "redux-saga/effects";
import client from "../lib/api/client";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_CODE = 'auth/CHANGE_CODE';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [MEMBER_LOGIN, MEMBER_LOGIN_SUCCESS, MEMBER_LOGIN_FAILURE] = createRequestActionTypes('auth/MEMBER_LOGIN');
const [STAFF_LOGIN, STAFF_LOGIN_SUCCESS, STAFF_LOGIN_FAILURE] = createRequestActionTypes('auth/STAFF_LOGIN');
const [MEMBER_SIGNUP, MEMBER_SIGNUP_SUCCESS, MEMBER_SIGNUP_FAILURE] = createRequestActionTypes('auth/MEMBER_SIGNUP');
const [STAFF_SIGNUP,STAFF_SIGNUP_SUCCESS, STAFF_SIGNUP_FAILURE] = createRequestActionTypes('auth/STAFF_SIGNUP');
const [SEND_EMAIL,SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE] = createRequestActionTypes('auth/SEND_EMAIL');
const [CONFIRM_EMAIL,CONFIRM_EMAIL_SUCCESS, CONFIRM_EMAIL_FAILURE] = createRequestActionTypes('auth/CONFIRM_EMAIL');

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({form, key, value}),
);

export const changeCode = createAction(
    CHANGE_CODE,
    ({key, value}) => ({key, value}),
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form,
);

export const memberLogin = createAction(
    MEMBER_LOGIN,
    ({email, password}) => ({email, password}),
);

export const staffLogin = createAction(
    STAFF_LOGIN,
    ({email, password}) => ({email, password}),
);

export const memberSignUp = createAction(
    MEMBER_SIGNUP,
    ({email, password1, password2, nickname, phonenumber}) => ({email, password1, password2, nickname,phonenumber}),
);

export const staffSignUp = createAction(
    STAFF_SIGNUP,
    ({email, password1, password2, name, hospitalName, licensePath, dept}) => ({email, password1, password2, name, hospitalName, licensePath, dept})
);

export const sendEmail = createAction(
    SEND_EMAIL,
    email => email,
);

export const confirmEmail = createAction(
    CONFIRM_EMAIL,
    ({email, code}) => ({email, code}),
);

// saga 생성
const memberLoginSaga = createRequestSaga(MEMBER_LOGIN, authAPI.memberLogin);
const staffLoginSaga = createRequestSaga(STAFF_LOGIN, authAPI.staffLogin);
const memberSignUpSaga = createRequestSaga(MEMBER_SIGNUP, authAPI.memberSignUp);
const staffSignUpSaga = createRequestSaga(STAFF_SIGNUP, authAPI.staffSignUp);
const sendEmailSaga = createRequestSaga(SEND_EMAIL, authAPI.sendEmail);
const confirmEmailSaga = createRequestSaga(CONFIRM_EMAIL, authAPI.confirmEmail);
export function* authSaga() {
    yield takeLatest(MEMBER_LOGIN, memberLoginSaga); // MEMBERLOGIN 액션에 대해 memberLoginSaga 실행
    yield takeLatest(STAFF_LOGIN, staffLoginSaga);
    yield takeLatest(MEMBER_SIGNUP, memberSignUpSaga);
    yield takeLatest(STAFF_SIGNUP, staffSignUpSaga);
    yield takeLatest(SEND_EMAIL, sendEmailSaga);
    yield takeLatest(CONFIRM_EMAIL, confirmEmailSaga);
}

const initialState = {
    login: {
        email: '',
        password: '',
    },
    memberSignUp: {
        email: '',
        password1: '',
        password2: '',
        nickname: '',
        phonenumber: '',
    },
    staffSignUp:{
        email: '',
        password1: '',
        password2: '',
        name: '',
        hospitalName: '',
        licensePath: '',
        dept: '',
    },
    code: '',
    memberAuth: null,
    memberAuthError: null,
    staffAuth: null,
    staffAuthError: null,
    certification: null,
    certificationError: null,
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => produce(
            state, draft => {
                draft[form][key] = value;
            }),
        [CHANGE_CODE]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form]
        }),
        [MEMBER_LOGIN_SUCCESS]: (state, {payload: memberAuth}) => {
            try {
                localStorage.setItem('member', JSON.stringify(memberAuth));
                client.defaults.headers.common['Authorization'] = `Bearer ${memberAuth}`;
            } catch (e) {
                console.log('localStorage is not working.');
            }
            return {
                ...state,
                memberAuth,
            }
        },
        [MEMBER_LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            memberAuthError: error,
        }),
        [STAFF_LOGIN_SUCCESS]: (state, {payload: staffAuth}) => {
            try {
                localStorage.setItem('staff', JSON.stringify(staffAuth));
                client.defaults.headers.common['Authorization'] = `Bearer ${staffAuth}`;
            } catch (e) {
                console.log('localStorage is not working.');
            }
            return {
                ...state,
                staffAuth,
            }
        },
        [STAFF_LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            staffAuthError: error,
        }),
        [MEMBER_SIGNUP_SUCCESS]: (state, {payload: memberAuth}) => ({
            ...state,
            memberAuth,
        }),
        [MEMBER_SIGNUP_FAILURE]: (state, {payload: error}) => ({
            ...state,
            memberAuthError: error,
        }),
        [STAFF_SIGNUP_SUCCESS]: (state, {payload: staffAuth}) => ({
            ...state,
            staffAuth,
        }),
        [STAFF_SIGNUP_FAILURE]: (state, {payload: error}) => ({
            ...state,
            staffAuthError: error,
        }),
        [SEND_EMAIL_SUCCESS]: (state, {payload: certification}) => ({
            ...state,
            certification,
        }),
        [SEND_EMAIL_FAILURE]: (state, {payload: error}) => ({
            ...state,
            certificationError: error
        }),
        [CONFIRM_EMAIL_SUCCESS]: (state, {payload: certification}) => ({
            ...state,
            certification,
        }),
        [CONFIRM_EMAIL_FAILURE]: (state, {payload: error}) => ({
            ...state,
            certificationError: error
        }),
    },
    initialState,
);

export default auth;