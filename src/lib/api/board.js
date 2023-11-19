import client from "./client";

export const writeBoard = ({memberId, title, body, dept}) => client.post('/api/boards', {memberId, title, body, dept});

export const readBoardList = () => client.get('/api/boards');

export const readBoardDetail = (id) => client.get(`/api/boards/${id}/details`);