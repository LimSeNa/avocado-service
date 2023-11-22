import HealthInfo from "../../components/health-info/HealthInfo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {readInfoList} from "../../modules/healthInfo";

const HealthInfoContainer = () => {
    const dispatch = useDispatch();
    const {healthInfo, healthInfoError, loading} = useSelector(({healthInfo, loading}) => ({
        healthInfo: healthInfo.healthInfo,
        healthInfoError: healthInfo.healthInfoError,
        loading: loading['healthInfo/READ_INFO_LIST'],
    }));

    // 처음 렌더링 때에만 실행 : deps에 빈 배열
    useEffect(() => {
        dispatch(readInfoList({deptNum: null, pageNum: 0}));
    }, []);

    return (
        <>
            {!loading && healthInfo && <HealthInfo healthInfo={healthInfo}/>}
            {!loading && healthInfoError && <HealthInfo healthInfoError={healthInfoError}/>}
        </>
    );
};

export default HealthInfoContainer;