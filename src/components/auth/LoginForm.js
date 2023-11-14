import {Link} from "react-router-dom";
import styles from "./auth.module.css";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {BsFillPersonCheckFill} from "react-icons/bs";
import {useForm} from "react-hook-form";

const LoginForm = ({type, form, onChange, onSubmitMember, onSubmitStaff}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const loginMap = {
        memberLogin: {
            text: '일반 회원 로그인',
            submit: onSubmitMember,
        },
        staffLogin: {
            text: '의료진 회원 로그인',
            submit: onSubmitStaff,
        }
    };
    const text = loginMap[type].text;
    const onSubmit = loginMap[type].submit;

    return (
        <div className={styles.auth}>
            <div className={type === 'memberLogin' && styles.authBox}>
                <h2>{text}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.authElement}>
                        <h3>이메일</h3>
                        <input {...register("email",
                            {
                                required: '필수 입력 항목입니다.',
                                pattern: {
                                    value: /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                                    message: '이메일 형식이 올바르지 않습니다.'
                                }
                            })}
                               placeholder="이메일"
                               onChange={onChange}
                               value={form.email}
                        />
                        <p className={styles.error}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.authElement}>
                        <h3>비밀번호</h3>
                        <input {...register("password",
                            {
                                required: '필수 입력 항목입니다.',
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                                    message: '비밀번호는 영문, 숫자를 포함하여 8~20자 이어야 합니다.'
                                }
                            })}
                               placeholder="비밀번호"
                               type="password"
                               onChange={onChange}
                               value={form.password}
                        />
                        <p className={styles.error}>{errors.password?.message}</p>
                    </div>
                    <button>{text}</button>
                </form>
                {type === 'memberLogin'
                    ? <p>아보카도가 처음이신가요?&nbsp;<Link to='/auth/signup/member'>일반 회원가입</Link></p>
                    : <p>아보카도가 처음이신가요?&nbsp;<Link to='/auth/signup/staff'>의료진 회원가입</Link></p>
                }
            </div>
            {type === 'memberLogin'
                ? <Link className={styles.linkButton} to='/auth/login/staff'>
                    <div>
                        <BsFillPersonCheckFill/>
                        &nbsp;&nbsp;의료진 회원이신가요?
                    </div>
                    <div className={styles.linkDiv}>
                        의료진 회원으로 로그인하러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </div>
                </Link>
                : null
            }
        </div>
    );
};

export default LoginForm;