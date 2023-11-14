import styled from "styled-components";
import Button from "../common/Button";
import {FaArrowAltCircleRight} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const ReviewListBlock = styled.div`
  display: flex;
  justify-content: center;
  
`;

const DeptBlock = styled.div`

`;

const ReviewItemBlock = styled.div`
  width: 50vw; 
  border: 1px solid gray;
  border-radius: 8px;
  padding: 28px 16px;
  margin-bottom: 8px;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .outline {
    flex: 1; /* 각 outline 컬럼이 동일한 넓이를 갖도록 설정 */
    display: flex;
    align-items: center;
    flex-direction: column; /* 자식 요소들을 세로로 정렬 */
  }
`;

const ReviewItem = ({review, onNavigateDetail}) => {
    const {starPoint, targetHospital, title} = review;
    const onChangeStar = (starPoint) => {
        const stars = [];

        for (let i = 1; i <= starPoint; i++) {
            stars.push(<AiFillStar style={{color: "#FFD745"}}/>);
        }

        return stars;
    };

    return (
        <ReviewItemBlock>
            <SubInfo>
                <div className='outline'>
                    <div><h3>{starPoint}</h3></div>
                    <div>{onChangeStar(starPoint)}</div>
                </div>
                <div className='outline'>
                    <h3>{targetHospital}</h3>
                    {title}
                </div>
            </SubInfo>
            <Button onClick={onNavigateDetail} style={{width: "100%", borderRadius: "8px", marginTop: "10px", padding: "10px"}}>리뷰 보러 가기 <FaArrowAltCircleRight/></Button>
        </ReviewItemBlock>
    );
};

const ReviewList = ({onSelectDept, reviewList, reviewListError, loading}) => {
    const navigate = useNavigate();
    const onNavigateDetail = (id) => {
        navigate(`/reviews/${id}/details`);
    };

    return (
        <ReviewListBlock>
            <DeptBlock>
                <Button value='1' onClick={onSelectDept} style={{borderRadius: "14px", marginBottom: "15px"}}>치과</Button>
            </DeptBlock>
            <div>
                {reviewList.content.map(review =>
                    <ReviewItem key={review.title} review={review} onNavigateDetail={() => onNavigateDetail(review.id)}/>
                )}
            </div>
        </ReviewListBlock>
    );
};

export default ReviewList;