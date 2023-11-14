import SignUpForm from "../../components/auth/SignUpForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    changeCode,
    changeField,
    confirmEmail,
    initializeForm,
    sendEmail,
    staffSignUp
} from "../../modules/auth";

const StaffSignUpForm = () => {
    const dispatch = useDispatch();
    const {form, staffAuth, staffAuthError, code} = useSelector(({auth}) => ({
        form: auth.staffSignUp,
        staffAuth: auth.staffAuth,
        staffAuthError: auth.staffAuthError,
        code: auth.code,
    }));
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(initializeForm('staffSignUp'));
    }, [dispatch]);

    const onChange = e => {
        const {name, value} = e.target;
        dispatch(changeField({
                form: 'staffSignUp',
                key: name,
                value,
            }),
        );
    };

    const onSendEmail = e => {
        e.preventDefault();

        const {email} = form;
        dispatch(sendEmail({email}));
        setIsOpen(!isOpen);
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

    const onSubmitStaff = e => {
        e.preventDefault();

        const {email, password1, password2, name, hospitalName, licensePath, dept} = form;
        dispatch(staffSignUp({
                email,
                password1,
                password2,
                name,
                hospitalName,
                licensePath,
                dept
            }),
        );
    };

    useEffect(() => {
        if (staffAuth) {
            console.log('의료진 회원가입 성공!');
        } else if (staffAuthError) {
            console.log('의료진 회원가입 실패!');
        }
    }, [staffAuth, staffAuthError]);

    return (
        <SignUpForm type="staffSignUp"
                    form={form}
                    onChange={onChange}
                    onSubmitStaff={onSubmitStaff}
                    onSendEmail={onSendEmail}
                    onChangeCode={onChangeCode}
                    isOpen={isOpen}
                    code={code}
                    onConfirmEmail={onConfirmEmail}
        />
    );
};

export default StaffSignUpForm;