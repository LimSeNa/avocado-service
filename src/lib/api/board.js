import client from "./client";

export const writeBoard = ({memberId, title, body, dept}) => client.post('/api/boards', {memberId, title, body, dept});