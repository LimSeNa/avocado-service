import client from "./client";

export const writeReply = ({staffId, boardId, reply}) => client.post('/api/board-reply');