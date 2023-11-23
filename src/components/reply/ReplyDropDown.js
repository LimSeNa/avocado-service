import {useState} from "react";
import {RiArrowDownSFill, RiArrowUpSFill} from "react-icons/ri";


const ReplyDropDown = ({handleDesc, handleAsc}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleDropDown}>
                <span>정렬</span>
                <span>{isOpen ?  <RiArrowUpSFill/> : <RiArrowDownSFill/>}</span>
            </button>
            {isOpen &&
                <div>
                    <button onClick={(e) => {handleDropDown(); handleDesc();}}>최신순</button>
                    <button onClick={(e) => {handleDropDown(); handleAsc();}}>오래된순</button>
                </div>
            }
        </div>
    );
};

export default ReplyDropDown;