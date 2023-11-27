import styles from "./paging.module.css";
import {v4 as uuid4} from "uuid";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";

const pageMap = [
    {
        pageNum: 0,
        pageView: <MdKeyboardDoubleArrowLeft/>
    },
    {
        pageNum: 1,
        pageView: 1,
    },
    {
        pageNum: 2,
        pageView: 2,
    },
    {
        pageNum: 3,
        pageView: 3,
    },
    {
        pageNum: 4,
        pageView: 4,
    },
    {
        pageNum: 5,
        pageView: <MdKeyboardDoubleArrowRight/>,
    }
];

const Paging = ({handleReviewsPage, handleBoardsPage, handleInfoPage, type}) => {
    return (
        <div className={styles.boxPaging}>
            {
                pageMap.map(page => (
                    <button className={styles.buttonPaging} key={uuid4()} value={page.pageNum} onClick={type === 'review' ? handleReviewsPage : (type === 'health-info' ? handleInfoPage : handleBoardsPage) }>
                        {page.pageView}
                    </button>
                ))
            }
        </div>
    );
};

export default Paging;