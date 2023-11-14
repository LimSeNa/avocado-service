import ReviewEditor from "../../components/review/ReviewEditor";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeField} from "../../modules/review";

const ReviewEditorContainer = () => {
    const dispatch = useDispatch();
    const {title, body, starPoint, targetHospital, targetDept, photoPath} = useSelector(({review}) => ({
        title: review.title,
        body: review.body,
        starPoint: review.starPoint,
        targetHospital: review.targetHospital,
        targetDept: review.targetDept,
        photoPath: review.photoPath,
    }));

    const onChangeField = useCallback(payload =>
        dispatch(changeField(payload)
        ), [dispatch]);

    return (
        <ReviewEditor onChangeField={onChangeField}
                      title={title}
                      body={body}
                      starPoint={starPoint}
                      targetHospital={targetHospital}
                      targetDept={targetDept}
                      photoPath={photoPath}
        />
    );
};

export default ReviewEditorContainer;