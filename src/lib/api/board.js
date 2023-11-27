import client from "./client";

export const writeBoard = ({memberId, title, body, dept}) => client.post('/api/boards', {memberId, title, body, dept});

export const readBoardList = ({pageNum}) => {
    return client.get(`/api/boards`, {
        params: {
            page: pageNum,
            size: 5,
        }
    });
};

export const readBoardDetail = (id) => client.get(`/api/boards/${id}/details`);