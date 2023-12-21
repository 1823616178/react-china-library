import useAxios from "axios-hooks";

/**
 * 获取知识分类
 * @param data
 */
export function getFirstTypeCountForHighSearch(data) {
    return useAxios({
        url: "/knowledge/commonApi/getFirstTypeCountForHighSearch",
        method: "post",
        data: data
    })
}

export function advancedRetrievalParams(data) {
    return useAxios({
        url: "/commonApi/getKnowledgeCategory",
        method: "post",
        params: data
    })
}
