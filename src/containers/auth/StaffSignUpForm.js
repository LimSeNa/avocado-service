import SignUpForm from "../../components/auth/SignUpForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changeCode, changeField, confirmEmail, initializeForm, sendEmail, staffSignUp} from "../../modules/auth";
import {useNavigate} from "react-router-dom";

const StaffSignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, staffAuth, staffAuthError, code, loading} = useSelector(({auth, loading}) => ({
        form: auth.staffSignUp,
        staffAuth: auth.staffAuth,
        staffAuthError: auth.staffAuthError,
        code: auth.code,
        loading: loading['auth/STAFF_SIGNUP'],
    }));
    const [isEmailOpen, setIsEmailOpen] = useState(false);

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

    const onSubmitStaff = () => {
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
        dispatch(initializeForm('staffSignUp'));
    }, [dispatch]);

    useEffect(() => {
        if (!loading && staffAuth) {
            console.log('의료진 회원가입 성공!');
            navigate('/');
        }

        if (!loading && staffAuthError) {
            alert('의료진 회원가입 실패!');
        }
    }, [loading]);

    return (
        <SignUpForm type="staffSignUp"
                    form={form}
                    onChange={onChange}
                    onSubmitStaff={onSubmitStaff}
                    onSendEmail={onSendEmail}
                    onChangeCode={onChangeCode}
                    isEmailOpen={isEmailOpen}
                    code={code}
                    onConfirmEmail={onConfirmEmail}
        />
    );
};

export default StaffSignUpForm;