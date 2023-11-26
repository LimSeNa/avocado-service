import styles from "./auth.module.css";
import {Link} from "react-router-dom";
import {BsFillPersonCheckFill} from "react-icons/bs";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {useRef} from "react";

const EmailCode = ({onChangeCode, onConfirmEmail, code}) => {
    return (
        <div className={styles.emailInputBox}>
            <input name="code"
                   placeholder="인증코드"
                   onChange={onChangeCode}
                   value={code}
            />
            <button onClick={onConfirmEmail}>확인</button>
        </div>
    );
};

const SignUpForm = ({type, form, onChange, onSendEmail, onConfirmEmail, onChangeCode, onSubmitMember, onSubmitStaff, isEmailOpen, code}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();
    const passwordRef = useRef(null);
    passwordRef.current = watch('password1');

    const signupMap = {
        memberSignUp: {
            text: '일반 회원가입',
            submit: onSubmitMember,
        },
        staffSignUp: {
            text: '의료진 회원가입',
            submit: onSubmitStaff,
        }
    };
    const text = signupMap[type].text;
    const onSubmit = signupMap[type].submit;

    return (
        <div className={styles.auth}>
            <div className={type === 'memberSignUp' && styles.authBox}>
                <h2>{text}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.emailElement}>
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
                    <div className={styles.emailBox}>
                        <button className={styles.emailButton} onClick={onSendEmail}>
                            이메일 인증하기
                        </button>
                        {isEmailOpen === true
                            ? <EmailCode onChangeCode={onChangeCode} onConfirmEmail={onConfirmEmail} code={code}/>
                            : null
                        }
                    </div>
                    <div className={styles.authElement}>
                        <h3>비밀번호</h3>
                        <p className={styles.info}>영문, 숫자로 구성된 8~20자의 비밀번호를 입력해주세요.</p>
                        <input {...register("password1",
                            {
                                required: '필수 입력 항목입니다.',
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                                    message: '비밀번호는 영문, 숫자로 구성된 8~20자 이어야 합니다.'
                                }
                            })}
                               placeholder="비밀번호"
                               type="password"
                               onChange={onChange}
                               value={form.password1}
                        />
                        <p className={styles.error}>{errors.password1?.message}</p>
                    </div>
                    <div className={styles.authElement}>
                        <h3>비밀번호 확인</h3>
                        <input {...register("password2",
                            {
                                required: '필수 입력 항목입니다.',
                                validate: (value) => {
                                    if (value === passwordRef.current) {
                                        return null;
                                    } else {
                                        return '비밀번호가 일치하지 않습니다.';
                                    }
                                }
                            })}
                               placeholder="비밀번호 확인"
                               type="password"
                               onChange={onChange}
                               value={form.password2}
                        />
                        <p className={styles.error}>{errors.password2?.message}</p>
                    </div>
                    {type === 'memberSignUp'
                        ? (
                            <>
                                <div className={styles.authElement}>
                                    <h3>닉네임</h3>
                                    <p className={styles.info}>한글, 영문, 숫자 중 한 가지 이상으로 구성된 2~10자의 닉네임을 입력해주세요.</p>
                                    <input {...register("nickname",
                                        {
                                            required: '필수 입력 항목입니다.',
                                            pattern: {
                                                value: /^[가-힣A-Za-z0-9]{2,10}$/,
                                                message: '닉네임은 한글, 영문, 숫자 중 한 가지 이상으로 구성된 2~10자 이어야 합니다.'
                                            }
                                        })}
                                           placeholder="닉네임"
                                           onChange={onChange}
                                           value={form.nickname}
                                    />
                                    <p className={styles.error}>{errors.nickname?.message}</p>
                                </div>
                                <div className={styles.authElement}>
                                    <h3>전화번호</h3>
                                    <p className={styles.info}>'-'를 제외하고 입력해주세요.</p>
                                    <input {...register("phonenumber",
                                        {
                                            required: '필수 입력 항목입니다.',
                                            pattern: {
                                                value: /^\d{11}$/,
                                                message: '전화번호는 숫자로만 구성되어야 합니다.'
                                            }
                                        })}
                                           placeholder="전화번호"
                                           onChange={onChange}
                                           value={form.phonenumber}
                                    />
                                    <p className={styles.error}>{errors.phonenumber?.message}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.authElement}>
                                    <h3>이름</h3>
                                    <input {...register("name",
                                        {
                                            required: '필수 입력 항목입니다.',
                                            pattern: {
                                                value: /[가-힣]{2,10}/,
                                                message: '이름은 한글로만 구성되어야 합니다.'
                                            }
                                        })}
                                           placeholder="이름"
                                           onChange={onChange}
                                           value={form.name}
                                    />
                                    <p className={styles.error}>{errors.name?.message}</p>
                                </div>
                                <div className={styles.authElement}>
                                    <h3>면허 번호</h3>
                                    <input {...register("licensePath",
                                        {
                                            required: '필수 입력 항목입니다.',
                                            pattern: {
                                                value: /^\d{4,10}$/,
                                                message: '면호 번호는 숫자로만 구성되어야 합니다.'
                                            }
                                        })}
                                           placeholder="면허 번호"
                                           onChange={onChange}
                                           value={form.licensePath}
                                    />
                                    <p className={styles.error}>{errors.licensePath?.message}</p>
                                </div>
                                <div className={styles.authElement}>
                                    <h3>병원</h3>
                                    <input {...register("hospitalName",
                                        {
                                            required: '필수 입력 항목입니다.'
                                        })}
                                           placeholder="병원"
                                           onChange={onChange}
                                           value={form.hospitalName}
                                    />
                                    <p className={styles.error}>{errors.hospitalName?.message}</p>
                                </div>
                                <div className={styles.authElement}>
                                    <h3>병과</h3>
                                    <input {...register("dept",
                                        {
                                            required: '필수 입력 항목입니다.'
                                        })}
                                           placeholder="병과"
                                           onChange={onChange}
                                           value={form.dept}
                                    />
                                    <p className={styles.error}>{errors.dept?.message}</p>
                                </div>
                            </>
                        )}
                    <button>{text}</button>
                </form>
                {type === 'memberSignUp'
                    ? <p>이미 아보카도 회원이신가요?&nbsp;<Link to='/auth/login/member'>일반 회원 로그인</Link></p>
                    : <p>이미 아보카도 회원이신가요?&nbsp;<Link to='/auth/login/staff'>의료진 회원 로그인</Link></p>
                }
            </div>
            {type === 'memberSignUp'
                ? <Link className={styles.linkButton} to='/auth/signup/staff'>
                    <div>
                        <BsFillPersonCheckFill/>
                        &nbsp;&nbsp;의료진이신가요?
                    </div>
                    <div className={styles.linkDiv}>
                        의료진 회원으로 가입하러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </div>
                </Link>
                : null
            }
        </div>
    );
};

export default SignUpForm;