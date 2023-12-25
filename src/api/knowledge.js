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

/**
 * 获取知识人物列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getPersonalAPiList(data) {
    return useAxios({
        url: "/knowledgeApi/personalApi/list",
        method: "post",
        params: data
    })
}

/**
 * 获取知识机构列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getOrganizationApiList(data) {
    return useAxios({
        url: "/knowledgeApi/organizationApi/list",
        method: "post",
        params: data
    })
}

/**
 * 获取知识事件列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getEventApiList(data) {
    return useAxios({
        url: "/knowledgeApi/eventApi/list",
        method: "post",
        params: data
    })
}

/**
 * 获取知识地理列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getGeographicalApiList(data) {
    return useAxios({
        url: "/knowledgeApi/geographicalApi/list",
        method: "post",
        params: data
    })
}

/**
 * 获取知识物产列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getProductApiList(data) {
    return useAxios({
        url: "/knowledgeApi/productApi/list",
        method: 'post',
        params: data
    })
}
