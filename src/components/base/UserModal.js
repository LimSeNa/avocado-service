import styles from "./modal.module.css";
import {useDispatch} from "react-redux";
import {logout} from "../../modules/auth";

const UserModal = ({member, staff, handleModal}) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        handleModal();
    };

    return (
        <div className={styles.boxModal}>
            {member &&
                <div>
                    <span>{member.name}</span>
                    <span>님</span>
                </div>}
            {staff &&
                <div>
                    <span>{staff.name}</span>
                    <span>님</span>
                </div>}
            <div onClick={handleLogout}>로그아웃</div>
        </div>
    );
};

export default  UserModal;