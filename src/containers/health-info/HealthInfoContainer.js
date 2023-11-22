import HealthInfo from "../../components/health-info/HealthInfo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initialize} from "../../modules/healthInfo";

const HealthInfoContainer = () => {
    const dispatch = useDispatch();
    const {healthInfo, healthInfoError, loading} = useSelector(({healthInfo, loading}) => ({
        healthInfo: healthInfo.healthInfo,
        healthInfoError: healthInfo.healthInfoError,
        loading: loading['healthInfo/READ_INFO_LIST'],
    }));

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return (
        <>
            {!loading && healthInfo && <HealthInfo healthInfo={healthInfo}/>}
            {!loading && healthInfoError && <HealthInfo healthInfoError={healthInfoError}/>}
        </>
    );
};

export default HealthInfoContainer;