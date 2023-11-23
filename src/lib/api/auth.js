import client from "./client";

export const memberLogin = ({email, password}) =>
    client.post('/api/auth/login/members', {email, password});

export const staffLogin = ({email, password}) =>
    client.post('/api/auth/login/staff', {email, password});

export const memberSignUp = ({email, password1, password2, nickname,phonenumber}) =>
    client.post('/api/auth/signup/members', {email, password1, password2, nickname,phonenumber});

export const staffSignUp = ({email, password1, password2, name, hospitalName, licensePath, dept}) =>
    client.post('/api/auth/signup/staff', {email, password1, password2, name, hospitalName, licensePath, dept});

export const sendEmail = ({email}) =>
    client.post('/mail/certification-code', {email});

export const confirmEmail = ({email, code}) =>
    client.post('/mail/certification-email', {email, code});

export const logout = () => client.post('/api/auth/logout');