import styles from "./drop-down.module.css";

const DeptDropDown = ({deptMap, handleChange}) => {
    const handelDept = e => {
        const {name, value} = e.target;
        handleChange({key: name, value});
    };

    return (
        <div className={styles.boxDeptMap}>
            {deptMap.map(deptItem => (
                <div className={styles.boxDeptItem} key={deptItem.id}>
                    <input className={styles.inputDeptItem}
                           type='checkbox'
                           id={deptItem.id}
                           name='dept'
                           value={deptItem.deptValue}
                           onChange={handelDept}
                    />
                    <label className={styles.labelDeptItem} htmlFor={deptItem.id}>
                        {deptItem.deptName}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default DeptDropDown;