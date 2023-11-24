import client from "./client";

export const postReview = ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}) =>
    client.post('/api/reviews', {memberId, title, body, starPoint, targetHospital, targetDept, photoPath});

export const readReviewList = ({deptNum, pageNum}) => {
    return client.get(`/api/reviews`, {
        params: {
            deptNum,
            page: pageNum,
            size: 5,
        }
    });
};

export const readReviewDetail = (id) =>
    client.get(`/api/reviews/${id}/details`);