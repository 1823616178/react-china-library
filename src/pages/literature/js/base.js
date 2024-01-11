/**
 * 文献100 篇章200
 * @type {[{sourceType: number, title: string},{sourceType: number, title: string}]}
 */
export const categoryType = [
    {
        title: "文献",
        sourceType: 100,
        num: 0
    },
    {
        title: "篇章",
        sourceType: 200,
        num: 0
    }
]

/**
 * 种类请求参数
 * @param sourceType
 * @param query
 * @returns {{categoryType: string, sourceType, advancedRetrievalParams: string}}
 */
export const categoryParams = (sourceType = 100, query = []) => {
    return {
        sourceType: sourceType,
        categoryType: "",
        advancedRetrievalParams: encodeURIComponent(JSON.stringify(query))
    }
}
