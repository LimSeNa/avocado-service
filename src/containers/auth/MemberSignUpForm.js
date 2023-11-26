import SignUpForm from "../../components/auth/SignUpForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changeCode, changeField, confirmEmail, initializeForm, memberSignUp, sendEmail} from "../../modules/auth";
import {useNavigate} from "react-router-dom";

const MemberSignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, memberAuth, memberAuthError, code, loading} = useSelector(({auth, loading}) => ({
        form: auth.memberSignUp,
        memberAuth: auth.memberAuth,
        memberAuthError: auth.memberAuthError,
        code: auth.code,
        loading: loading['auth/MEMBER_SIGNUP'],
    }));
    const [isEmailOpen, setIsEmailOpen] = useState(false);

    const onChange = e => {
        const {name, value} = e.target;
        dispatch(changeField({
                form: 'memberSignUp',
                key: name,
                value,
            }),
        );
    };

    const onSendEmail = e => {
        e.preventDefault();

        const {email} = form;
        dispatch(sendEmail({email}));
        setIsEmailOpen(!isEmailOpen);
    };

    const onChangeCode = e => {
        const {name, value} = e.target;
        dispatch(changeCode({
                key: name,
                value,
            }),
        );
    };

    const onConfirmEmail = e => {
        e.preventDefault();

        const {email} = form;
        dispatch(confirmEmail({
                email,
                code,
            }),
        );
    };

    const onSubmitMember = () => {
        const {email, password1, password2, nickname, phonenumber} = form;
        dispatch(memberSignUp({
                email,
                password1,
                password2,
                nickname,
                phonenumber,
            }),
        );
    };

    useEffect(() => {
        dispatch(initializeForm('memberSignUp'));
    }, [dispatch]);

    useEffect(() => {
        if (!loading && memberAuth) {
            console.log('일반 회원 로그인 성공!');
            navigate('/');
        }

        if (!loading && memberAuthError) {
            alert('회원가입 실패!');
        }
    }, [loading]);

    return (
        <SignUpForm type="memberSignUp"
                    form={form}
                    onChange={onChange}
                    onSendEmail={onSendEmail}
                    onChangeCode={onChangeCode}
                    onSubmitMember={onSubmitMember}
                    isEmailOpen={isEmailOpen}
                    code={code}
                    onConfirmEmail={onConfirmEmail}
        />
    );
};

export default MemberSignUpForm;