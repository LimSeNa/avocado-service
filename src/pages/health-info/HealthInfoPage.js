import HealthInfoContainer from "../../containers/health-info/HealthInfoContainer";
import Banner from "../../components/common/Banner";
import HealthInfoIcon from "../../assets/health-info-icon.png";
import DeptTableContainer from "../../containers/common/DeptTableContainer";
import PagingContainer from "../../containers/common/PagingContainer";

const HealthInfoPage = () => {
    return (
        <>
            <Banner title={'검증된 건강 정보를 확인하여 유용한 팁을 얻어 가세요!'}
                    icon={HealthInfoIcon}
            />
            <DeptTableContainer type={'health-info'}/>
            <HealthInfoContainer/>
            <PagingContainer type={'health-info'}/>
        </>
    );
};

export default HealthInfoPage;