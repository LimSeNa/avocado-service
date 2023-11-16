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
            <section className={styles.sectionOne}>
                <div>
                    <h1>증상을 작성하면 진료과를 추천해 드려요.</h1>
                    <ul>
                        <li>병원에서 제공하는 주요 증상에 대한 진료과 누적 데이터를 보유하고 있어요.</li>
                        <li>누적된 데이터 기반으로 진료과를 추천해 드려요.</li>
                        <li>이제 "아픈데 어떤 진료과를 가야 하지?" 고민하지 말아요.</li>
                    </ul>
                    <Link to='/search' className={styles.linkButton}>
                        진료과 추천받으러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
                <div className={styles.imgBox}>
                    <img className={styles.sectionSubImg} src={MainOneSubImg} alt='메인페이지 서브이미지1'/>
                    <img className={styles.sectionImg} src={MainOneImg} alt='메인페이지 이미지1'/>
                </div>
            </section>
            <section className={styles.sectionTwo}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={MainTwoImg} alt='메인페이지 이미지2'/>
                </div>
                <div>
                    <h1>병원 리뷰를 통해 가격 비교를 할 수 있어요.</h1>
                    <ul>
                        <li>병원을 방문한 실제 사용자들의 후기를 만나 볼 수 있어요.</li>
                        <li>"같은 진료이면? 더 저렴한 곳으로!" 합리적인 소비를 해 보아요.</li>
                    </ul>
                    <Link to='/reviews' className={styles.linkButton}>
                        병원 리뷰 보러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
            </section>
            <section className={styles.sectionThree}>
                <div>
                    <h1>궁금한 점을 질문하면<br/>의료진에게 무료로 답변 받을 수 있어요.</h1>
                    <ul>
                        <li>의료진과 편리한 커뮤니케이션을 경험해 보아요.</li>
                    </ul>
                    <Link to='/boards' className={styles.linkButton}>
                        의료진에게 질문하러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={MainTreeImg} alt='메인페이지 이미지3'/>
                </div>
            </section>
            <section className={styles.sectionFour}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={MainFourImg} alt='메인페이지 이미지4'/>
                </div>
                <div>
                    <h1>유용한 건강 관련 소식을 확인할 수 있어요.</h1>
                    <ul>
                        <li>건강 ・ 질병 ・ 의약품 등에 관한 정보를 매일 업데이트하여<br/>사용자들에게 제공해요.</li>
                    </ul>
                    <Link to='/health-infos' className={styles.linkButton}>
                        건강 정보 보러 가기&nbsp;
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MainPage;