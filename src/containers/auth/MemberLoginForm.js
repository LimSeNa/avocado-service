import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, memberLogin} from "../../modules/auth";
import {useEffect} from "react";
import client from "../../lib/api/client";

const MemberLoginForm = () => {
    const dispatch = useDispatch();
    const {form, memberAuth, memberAuthError} = useSelector(({auth}) => ({
        form: auth.login,
        memberAuth: auth.memberAuth,
        memberAuthError: auth.memberAuthError,
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

    const onSubmit = e => {
        const {email, password} = form;
        dispatch(memberLogin({email, password}));
    };

    useEffect(() => {
        if (memberAuth) {
            try {
                localStorage.setItem('member', JSON.stringify(memberAuth)); // memberAuth 객체를 JSON 문자열로 변환
                client.defaults.headers.common['Authorization'] = `Bearer ${memberAuth}`;
            } catch (e) {
                console.log('localStorage is not working.');
            }
        } else if (memberAuthError) {
            console.log(memberAuthError);
            console.log('일반회원 로그인 실패');
            return;
        }
    }, [memberAuth, memberAuthError]);

    return (
        <LoginForm type="memberLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitMember={onSubmit}
        />
    );
};

export default MemberLoginForm;