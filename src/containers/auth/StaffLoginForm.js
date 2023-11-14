import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, staffLogin} from "../../modules/auth";
import {useEffect} from "react";
import client from "../../lib/api/client";

const StaffLoginForm = () => {
    const dispatch = useDispatch();
    const {form, staffAuth, staffAuthError} = useSelector(({auth}) => ({
        form: auth.login,
        staffAuth: auth.staffAuth,
        staffAuthError: auth.staffAuthError,
    }));

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    const onChange = e => {
        const {name, value} = e.target;
        dispatch(changeField({
                form: 'login',
                key: name,
                value,
            })
        );
    };

    const onSubmit = e => {
        const {email, password} = form;
        dispatch(staffLogin({email, password}));
    };

    useEffect(() => {
        if (staffAuth) {
            try {
                localStorage.setItem('staff', JSON.stringify(staffAuth));
                client.defaults.headers['Authorization'] = `Bearer ${staffAuth}`;
            } catch (e) {
                console.log('localStorage is not working.')
            }
        } else if (staffAuthError) {
            console.log(staffAuthError);
            console.log('의료진 로그인 실패');
            return;
        }
    }, [staffAuth, staffAuthError]);

    return (
        <LoginForm type="staffLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitStaff={onSubmit}
        />
    );
};

export default StaffLoginForm;