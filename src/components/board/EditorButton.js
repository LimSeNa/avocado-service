import Button from "../common/Button";

const EditorButton = ({onPublish}) => {
    return (
        <Button onClick={onPublish}
                style={{width: '20%', height: '50px'}}
        >질문 등록</Button>
    );
};

export default EditorButton;