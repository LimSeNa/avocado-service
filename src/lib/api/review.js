import client from "./client";

export const postReview = ({memberId, title, body, starPoint, targetHospital, targetDept, photoPath}) =>
    client.post('/api/reviews', {memberId, title, body, starPoint, targetHospital, targetDept, photoPath});

export const readReviewDetail = (id) =>
    client.get(`/api/reviews/${id}/details`);

export const readReviewList = (deptNum) => {
    return client.get(`/api/reviews`, {
        params: {
            deptNum,
        }
    });
};