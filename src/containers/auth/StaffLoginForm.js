import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, staffLogin} from "../../modules/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StaffLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {staffAuth, staffAuthError, loading, form} = useSelector(({auth, loading}) => ({
        form: auth.login,
        staffAuth: auth.staffAuth,
        staffAuthError: auth.staffAuthError,
        loading: loading['auth/STAFF_LOGIN'],
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

    const onSubmit = () => {
        const {email, password} = form;
        dispatch(staffLogin({email, password}));
    };

    useEffect(() => {
        if (!loading && staffAuth) {
            navigate('/');
            window.location.reload();
        }

        if (!loading && staffAuthError) {
            alert('의료진 로그인 실패!');
        }
    }, [loading]);

    return (
        <LoginForm type="staffLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitStaff={onSubmit}
        />
    );
};

export default StaffLoginForm;