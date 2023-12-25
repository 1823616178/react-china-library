import {getPersonalAPiList} from "@/api/knowledge.js";

export let firstQuery = {
    firstTypeList: [
        {
            advancedRetrievalParamsList: [],
            tablaName: 'zsk_personal_temp'
        },
        {
            advancedRetrievalParamsList: [],
            tablaName: 'zsk_org_temp'
        },
        {
            advancedRetrievalParamsList: [],
            tablaName: 'zsk_geographical_temp'
        },
        {
            advancedRetrievalParamsList: [],
            tablaName: 'zsk_event_temp'
        },
        {
            advancedRetrievalParamsList: [],
            tablaName: 'zsk_product_temp'
        }
    ]
}

export let advancedQuery = {
    advancedRetrievalParams: "",
    categoryType: "",
    sourceType: 300
}

export const listQuery = () => {
    return {
        sort: "orderNum, rid",
        order: "desc",
        page: 1,
        rows: 10
    }
}

export const TempToType = [
    {tableName: "zsk_personal_temp", type: "", title: "人物"}
]

/**
 * 转换数据格式
 * @returns {Promise<*[]>}
 */
export const transitionList = async (data, arr) => {
    arr = []
    for (let i in data) {
        let obj = {
            title: data[i].personalName || "不详",
            type: TempToType.find(res => {
                return res.tableName === data[i].tableName
            }).title,
            sourceName: data[i].sourceName || "不详", //出处
            biography: data[i].biography || "暂无",
            biography_highlight: data[i].biography_highlight || "暂无"
        }
        arr.push(obj)
    }
}



