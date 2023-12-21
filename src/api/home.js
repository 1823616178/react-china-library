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

export function selectBookTempOrderByViews(data) {
    return useAxios({
        url: "/bookApi/selectBookTempOrderByViews",
        method: "get",
        params: data
    })
}

/**
 * 获取图表列表
 * @param data
 */
export function selectChartSourceList(data) {
    return useAxios({
        url: "/chartApi/selectChartSourceList",
        method: "POST",
        params: data
    })
}
