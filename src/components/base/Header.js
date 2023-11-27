import {Link, useLocation, useNavigate} from "react-router-dom";
import {BiSolidLocationPlus} from "react-icons/bi";
import styles from "./header.module.css";
import {FaUser, FaUserMd} from "react-icons/fa";
import {useEffect, useState} from "react";
import UserModal from "./UserModal";
import {useSelector} from "react-redux";

const Header = () => {
    const pathname = useLocation();
    const navigate = useNavigate();
    const {auth, authError, loading} = useSelector(({auth, loading}) => ({
        auth: auth.auth,
        authError: auth.authError,
        loading: loading['auth/LOGOUT'],
    }));
    const member = JSON.parse(localStorage.getItem('member'));
    const staff = JSON.parse(localStorage.getItem('staff'));
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (!loading && auth) {
            navigate(pathname);
            window.location.reload();
        }

        if (!loading && authError) {
            alert('로그아웃 실패!');
        }
    }, [loading]);

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <BiSolidLocationPlus className={styles.logoImg}/>
                Avocado
            </Link>
            <nav className={styles.nav}>
                <div className={styles.boxLink}>
                    <Link to='/search'>증상 검색</Link>
                </div>
                <div className={styles.boxLink}>
                    <Link to='/reviews'>병원 리뷰</Link>
                </div>
                <div className={styles.boxLink}>
                    <Link to='/boards'>질문 게시판</Link>
                </div>
                <div className={styles.boxLink}>
                    <Link to='/health-infos'>건강정보</Link>
                </div>
                <div className={styles.boxLink}>
                    {member &&
                        <div className={styles.boxUserIcon} onClick={handleModal}>
                            <FaUser className={styles.userIcon}/>
                        </div>
                    }
                    {staff &&
                        <div className={styles.boxUserIcon} onClick={handleModal}>
                            <FaUserMd className={styles.userIcon}/>
                        </div>
                    }
                    {!member && !staff &&
                        <Link to='/auth/login/member' className={styles.login}>
                            로그인
                        </Link>
                    }
                    {isOpen && <UserModal member={member} staff={staff} handleModal={handleModal}/>}
                </div>
            </nav>
        </div>
    );
};

export default Header;