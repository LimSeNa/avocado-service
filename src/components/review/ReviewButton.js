const ReviewButton = ({handleWrite}) => {
    return (
        <div>
            <button onClick={handleWrite}>리뷰 등록</button>
        </div>
    );
};

export default ReviewButton;