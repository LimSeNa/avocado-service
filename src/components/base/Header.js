import styles from "./header.module.css";
import {Link} from "react-router-dom";
import {BiSolidLocationPlus} from "react-icons/bi";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <BiSolidLocationPlus className={styles.logoImg}/>
                Avocado
            </Link>
            <nav className={styles.nav}>
                <Link to='/search'>증상 검색</Link>
                <Link to='/reviews'>병원 리뷰</Link>
                <Link to='/boards'>질문 게시판</Link>
                <Link to='/health-infos'>건강정보</Link>
                <Link to='/auth/login/member' className={styles.login}>로그인</Link>
            </nav>
        </div>
    );
};

export default Header;