import {Link} from "react-router-dom";
import MainOneImg from "../../assets/main-section-one.png";
import MainOneSubImg from "../../assets/main-section-one-sub.png";
import MainTwoImg from "../../assets/main-section-two.png";
import MainTreeImg from "../../assets/main-section-three.png";
import MainFourImg from "../../assets/main-section-four.png";
import {FaArrowAltCircleRight} from "react-icons/fa";
import styles from "./main.module.css";

const MainPage = () => {
    return (
        <div>
            <section className={styles.boxSection}>
                <div className={styles.boxInfo}>
                    <h1 className={styles.title}>증상을 작성하면 진료과를 추천해 드려요.</h1>
                    <ul className={styles.boxList}>
                        <li className={styles.listItem}>병원에서 제공하는 주요 증상에 대한 진료과 누적 데이터를 보유하고 있어요.</li>
                        <li className={styles.listItem}>누적된 데이터 기반으로 진료과를 추천해 드려요.</li>
                        <li className={styles.listItem}>이제 "아픈데 어떤 진료과를 가야 하지?" 고민하지 말아요.</li>
                    </ul>
                    <Link className={styles.btnLink} to='/search'>
                        <div>진료과 추천받으러 가기</div>
                        <FaArrowAltCircleRight className={styles.iconArrow}/>
                    </Link>
                </div>
                <div className={styles.boxImg}>
                    <img className={styles.subImgOne} src={MainOneSubImg} alt='메인페이지 서브이미지1'/>
                    <img className={styles.imgOne} src={MainOneImg} alt='메인페이지 이미지1'/>
                </div>
            </section>
            <section className={styles.boxSection}>
                <div className={styles.boxImg}>
                    <img className={styles.imgTwo} src={MainTwoImg} alt='메인페이지 이미지2'/>
                </div>
                <div className={styles.boxInfo}>
                    <h1 className={styles.title}>병원 리뷰를 통해 가격 비교를 할 수 있어요.</h1>
                    <ul className={styles.boxList}>
                        <li className={styles.listItem}>병원을 방문한 실제 사용자들의 후기를 만나 볼 수 있어요.</li>
                        <li className={styles.listItem}>"같은 진료이면? 더 저렴한 곳으로!" 합리적인 소비를 해 보아요.</li>
                    </ul>
                    <Link className={styles.btnLink} to='/reviews'>
                        <div>병원 리뷰 보러 가기</div>
                        <FaArrowAltCircleRight className={styles.iconArrow}/>
                    </Link>
                </div>
            </section>
            <section className={styles.boxSection}>
                <div className={styles.boxInfo}>
                    <h1 className={styles.title}>궁금한 점을 질문하면,<br/>의료진에게 무료로 답변 받을 수 있어요.</h1>
                    <ul className={styles.boxList}>
                        <li className={styles.listItem}>의료진과 편리한 커뮤니케이션을 경험해 보아요.</li>
                    </ul>
                    <Link className={styles.btnLink} to='/boards'>
                        <div>의료진에게 질문하러 가기</div>
                        <FaArrowAltCircleRight className={styles.iconArrow}/>
                    </Link>
                </div>
                <div className={styles.boxImg}>
                    <img className={styles.imgThree} src={MainTreeImg} alt='메인페이지 이미지3'/>
                </div>
            </section>
            <section className={styles.boxSection}>
                <div className={styles.boxImg}>
                    <img className={styles.imgFour} src={MainFourImg} alt='메인페이지 이미지4'/>
                </div>
                <div className={styles.boxInfo}>
                    <h1 className={styles.title}>유용한 건강 관련 소식을 확인할 수 있어요.</h1>
                    <ul className={styles.boxList}>
                        <li className={styles.listItem}>건강 ・ 질병 ・ 의약품 등에 관한 정보를 매일 업데이트하여 사용자들에게 제공해요.</li>
                    </ul>
                    <Link className={styles.btnLink} to='/health-infos'>
                        <div>건강 정보 보러 가기</div>
                        <FaArrowAltCircleRight className={styles.iconArrow}/>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MainPage;