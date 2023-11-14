import SymptomTag from "../../components/tag/SymptomTag";
import {useDispatch, useSelector} from "react-redux";
import {changeSymptom} from "../../modules/search";

const SymptomTagContainer = () => {
    const dispatch = useDispatch();
    const {symptom, loading} = useSelector(({search, loading}) => ({
        symptom: search.symptom,
        loading: loading['search/SEARCH_POST'],
    }));

    const handlePick = (e, s) => {
        const {value} = e.target;

        if (symptom) {
            if (symptom !== value) {
                alert('하나의 증상만 선택할 수 있어요!');
                s.checked = false;
            } else if (symptom === value) {
                s.checked = false;
                dispatch(changeSymptom({
                    key: 'symptom',
                    value: ''
                }));
            }
        } else if (!symptom) {
            dispatch(changeSymptom({
                key: 'symptom',
                value,
            }));
        }
    };

    const handleCheck = s => {
        s.checked = !s.checked;
    };

    return (
        <SymptomTag loading={loading}
                    handlePick={handlePick}
                    handleCheck={handleCheck}
        />
    );
};

export default SymptomTagContainer;