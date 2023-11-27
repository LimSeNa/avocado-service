import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, memberLogin} from "../../modules/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const MemberLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, memberAuth, memberAuthError, loading} = useSelector(({auth, loading}) => ({
        form: auth.login,
        memberAuth: auth.memberAuth,
        memberAuthError: auth.memberAuthError,
        loading: loading['auth/MEMBER_LOGIN'],
    }));

    // 컴포넌트가 처음 렌더링될 때 form 초기화
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    const onChange = e => {
        const {name, value} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            })
        );
    };

    const onSubmit = () => {
        const {email, password} = form;
        dispatch(memberLogin({email, password}));
    };

    useEffect(() => {
        if (!loading && memberAuth) {
            navigate('/');
            window.location.reload();
        }

        if (!loading && memberAuthError) {
            alert('로그인 실패!');
        }
    }, [loading]);

    return (
        <LoginForm type="memberLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitMember={onSubmit}
        />
    );
};

export default MemberLoginForm;