import HealthInfo from "../../components/health-info/HealthInfo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {readInfoList} from "../../modules/healthInfo";

const HealthInfoContainer = () => {
    const dispatch = useDispatch();
    const {healthInfo, healthInfoError, loading} = useSelector(({healthInfo, loading}) => ({
        healthInfo: healthInfo.healthInfo,
        healthInfoError: healthInfo.healthInfoError,
        loading: loading['healthInfo/READ_INFO_LIST'],
    }));
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(readInfoList(page));
    }, [dispatch, page]);

    return (
        <>
            {!loading && healthInfo && <HealthInfo healthInfo={healthInfo}/>}
            {!loading && healthInfoError && <HealthInfo healthInfoError={healthInfoError}/>}
        </>
    );
};

export default HealthInfoContainer;