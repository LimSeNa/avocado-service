import client from "./client";

export const readInfoList = ({deptNum, page}) => {
    return client.get(`/api/health-infos`, {
        params: {
            dept: deptNum,
            page,
            size: 5,
        }
    });
};