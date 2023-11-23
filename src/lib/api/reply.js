import client from "./client";

export const writeReply = ({staffId, boardId, reply}) => client.post('/api/board-reply', {staffId, boardId, reply});

export const readReplyList = (id) => client.get(`/api/board-reply/${id}/details`);

export const readReplyDesc = (boardId) => client.get(`/api/board-reply/board/${boardId}/create-desc`);

export const readReplyAsc = (boardId) => client.get(`/api/board-reply/board/${boardId}/create-asc`);