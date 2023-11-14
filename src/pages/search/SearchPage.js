import SearchContainer from "../../containers/search/SearchContainer";
import SymptomTagContainer from "../../containers/tag/SymptomTagContainer";

const SearchPage = () => {
    return (
        <>
            <SymptomTagContainer/>
            <SearchContainer/>
        </>
    );
};

export default SearchPage;