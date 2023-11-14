import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";

const ReviewViewerBlock = styled.div`
  margin-top: 15rem;
`;

const ReviewViewerHead = styled.div`

`;

const ReviewViewerContent = styled.div`

`;

const SubInfo = styled.div`
  border-bottom: 1px solid darkgrey;
  margin-bottom: 10px;
  padding-bottom: 8px;
  span + span:before {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    content: '\\B7';
  }
`;

const HospitalInfo = styled.div`
  font-size: large;
  margin-bottom: 5rem;
  span + span:before {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    content: '\\B7';
  }
`;

const ReviewViewer = ({review, reviewError}) => {
    if (reviewError) {
        return <div>에러 발생!</div>
    }

    const {writer, title, body, starPoint, targetHospital, targetDept} = review.data;

    return (
        <ReviewViewerBlock>
            <ReviewViewerHead>
                <SubInfo>
                    <span style={{fontSize: "7", fontWeight: "bold"}}>{title}</span>
                    <span style={{color: "darkgray"}}>작성자: {writer}</span>
                </SubInfo>
                <HospitalInfo>
                    <span>{targetHospital}</span>
                    <span>{targetDept}</span>
                    <span><AiFillStar style={{color: "#FFD745"}}/>{starPoint}</span>
                </HospitalInfo>
            </ReviewViewerHead>
            <ReviewViewerContent dangerouslySetInnerHTML={{__html: body}}/>
        </ReviewViewerBlock>
    );
};

export default ReviewViewer;