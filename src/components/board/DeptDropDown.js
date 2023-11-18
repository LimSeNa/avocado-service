const DeptDropDown = ({deptMap, handleChange}) => {
    const handelDept = e => {
        const {name, value} = e.target;
        handleChange({key: name, value});
    };

    return (
        <div>
            {deptMap.map(deptItem => (
                <span key={deptItem.id}>
                    <input type='checkbox'
                           id={deptItem.id}
                           name='dept'
                           value={deptItem.deptValue}
                           onChange={handelDept}
                    />
                    <label htmlFor={deptItem.id}>
                        {deptItem.deptName}
                    </label>
                </span>
            ))}
        </div>
    );
};

export default DeptDropDown;