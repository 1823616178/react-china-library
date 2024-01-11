import useAxios, {configure} from "axios-hooks";

/**
 * 获取图书列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function selectBookList(data) {
    return useAxios({
        url: "/bookApi/selectBookList",
        method: "post",
        params: data
    })
}

/**
 * 获取左侧列表类型
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getBookCategory(data) {
    return useAxios({
        url: "/bookApi/getBookCategory",
        method: "post",
        params: data
    })
}

/**
 * 获取文献列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function selectBookPropertiesList(data) {
    return useAxios({
        url: "/bookApi/selectBookPropertiesList",
        method: "post",
        params:data
    })
}

