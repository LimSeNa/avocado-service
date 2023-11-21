import HealthInfoContainer from "../../containers/health-info/HealthInfoContainer";
import DeptTable from "../../components/common/DeptTable";
import Banner from "../../components/common/Banner";
import HealthInfoIcon from "../../assets/health-info-icon.png";

const HealthInfoPage = () => {
    return (
        <>
            <Banner title={'검증된 건강 정보를 확인하여 유용한 팁을 얻어 가세요!'}
                    icon={HealthInfoIcon}
            />
            <DeptTable/>
            <HealthInfoContainer/>
        </>
    );
};

export default HealthInfoPage;