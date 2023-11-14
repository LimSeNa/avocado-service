import client from "./client";

export const boardPost = ({ title, body }) => client.post('/api/boards', {title, body});