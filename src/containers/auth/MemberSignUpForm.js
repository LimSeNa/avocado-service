import SignUpForm from "../../components/auth/SignUpForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changeCode, changeField, confirmEmail, initializeForm, memberSignUp, sendEmail} from "../../modules/auth";

const MemberSignUpForm = () => {
    const dispatch = useDispatch();
    const {form, memberAuth, memberAuthError, code} = useSelector(({auth}) => ({
        form: auth.memberSignUp,
        memberAuth: auth.memberAuth,
        memberAuthError: auth.memberAuthError,
        code: auth.code,
    }));
    const [isEmailOpen, setIsEmailOpen] = useState(false);

    useEffect(() => {
        dispatch(initializeForm('memberSignUp'));
    }, [dispatch]);

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

    const onSubmitMember = e => {
        e.preventDefault();

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
        if (memberAuth) {
            console.log('회원가입 성공!');
        } else if (memberAuthError) {
            console.log('회원가입 실패!');
        }
    }, [memberAuth, memberAuthError]);

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