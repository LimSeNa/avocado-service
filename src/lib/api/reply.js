import client from "./client";

export const writeReply = ({staffId, boardId, reply}) => client.post('/api/board-reply', {staffId, boardId, reply});

export const readReplyDesc = (boardId) => client.get(`/api/board-reply/board/${boardId}/create-desc`);

export const readReplyAsc = (boardId) => client.get(`/api/board-reply/board/${boardId}/create-asc`);

export const writeReviewReply = ({memberId, reviewId, reply}) => client.post('/api/review-reply', {memberId, reviewId, reply});

export const readReviewReplyDesc = (reviewId) => client.get(`/api/review-reply/review/${reviewId}/create-desc`);

export const readReviewReplyAsc = (reviewId) => client.get(`/api/review-reply/review/${reviewId}/create-asc`);