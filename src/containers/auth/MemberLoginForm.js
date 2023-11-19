import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, memberLogin} from "../../modules/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const MemberLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form} = useSelector(({auth, loading}) => ({
        form: auth.login,
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
        navigate('/');
    };

    return (
        <LoginForm type="memberLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitMember={onSubmit}
        />
    );
};

export default MemberLoginForm;