import useAxios from "axios-hooks";

/**
 * 请求首页知识模块数据
 * @param data
 * @returns {*}
 */
export function listByViewsOrder(data) {
    return useAxios({
        url: "/knowledge/commonApi/listByViewsOrder",
        method: "get",
        params: data
    })
}
