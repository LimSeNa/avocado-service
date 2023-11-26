import SearchContainer from "../../containers/search/SearchContainer";
import SymptomTagContainer from "../../containers/tag/SymptomTagContainer";
import Banner from "../../components/common/Banner";
import SymtomIcon from "../../assets/symptom-icon.png";

const SearchPage = () => {
    return (
        <>
            <Banner title={'아래 항목 중 해당하는 증상을 고르고 검색 버튼을 눌러보세요!'}
                    icon={SymtomIcon}/>
            <SymptomTagContainer/>
            <SearchContainer/>
        </>
    );
};

export default SearchPage;