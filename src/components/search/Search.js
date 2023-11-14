import SearchModal from "./SearchModal";
import {useState} from "react";
import styles from "./search.module.css";
import {BsSearch} from "react-icons/bs"

const Search = ({symptom, message, messageError, handleChange, handleClick, handleInitialize}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen)
    };

    if (messageError) {
        return <div>증상 검색 에러 💥</div>;
    }

    return (
        <div className={styles.searchBox}>
            <div className={styles.searchInputBox}>
                <BsSearch className={styles.searchIcon}/>
                <input className={styles.searchInput}
                       name="symptom"
                       placeholder="증상을 선택해 주세요."
                       value={symptom}
                       onChange={handleChange}
                />
            </div>
            <button className={styles.searchButton} onClick={() => {handleClick();openModalHandler();}}>
                검색
            </button>
            {isOpen === true ? <SearchModal message={message} onClick={openModalHandler} handleInitialize={handleInitialize}/> : null}
        </div>
    );
};

export default Search;