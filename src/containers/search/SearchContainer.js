import Search from "../../components/search/Search";
import {useDispatch, useSelector} from "react-redux";
import {changeSymptom, initialize, searchPost} from "../../modules/search";
import {useEffect} from "react";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const {symptom, message, messageError} = useSelector(({search}) => ({
        symptom: search.symptom,
        message: search.message,
        messageError: search.messageError,
    }));

    const handleChange = e => {
        const {name, value} = e.target;

        dispatch(
            changeSymptom({
                key: name,
                value
            }),
        );
    };

    const handleClick = () => {
        dispatch(searchPost({
                symptom,
            }),
        );
    };

    const handleInitialize = () => {
        dispatch(initialize());
    };


    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return (
        <Search symptom={symptom}
                message={message}
                messageError={messageError}
                handleChange={handleChange}
                handleClick={handleClick}
                handleInitialize={handleInitialize}
        />
    );
};

export default SearchContainer;