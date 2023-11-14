const BoardItem = ({title, body, onChange}) => {
    return (
        <div>
            <input
                name="title"
                placeholder="제목"
                onChange={onChange}
                value={title}
            />
            <input
                name="body"
                placeholder="내용"
                onChange={onChange}
                value={body}
            />
        </div>
    );
};

export default BoardItem;