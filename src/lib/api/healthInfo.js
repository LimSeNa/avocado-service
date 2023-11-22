import client from "./client";

export const readInfoList = ({deptNum, pageNum}) => {
    return client.get(`/api/health-infos`, {
        params: {
            dept: deptNum,
            page: pageNum,
            size: 2,
        }
    });
};