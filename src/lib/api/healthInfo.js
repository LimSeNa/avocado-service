import client from "./client";

export const readInfoList = (page) => {
    return client.get(`/api/health-infos`, {
        params: {
            dept: 1,
            page,
            size: 5,
        }
    });
};