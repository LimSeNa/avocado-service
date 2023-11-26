import LoginForm from "../../components/auth/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, staffLogin} from "../../modules/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StaffLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login,
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
        navigate('/');
    };

    return (
        <LoginForm type="staffLogin"
                   form={form}
                   onChange={onChange}
                   onSubmitStaff={onSubmit}
        />
    );
};

export default StaffLoginForm;