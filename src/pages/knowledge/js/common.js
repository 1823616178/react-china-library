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

export const listQuery = (adaParamsQuery = []) => {
    return {
        sort: "orderNum, rid",
        order: "desc",
        page: 1,
        rows: 10,
        advancedRetrievalParams:
            adaParamsQuery.length > 0 ?
                encodeURIComponent(JSON.stringify([...adaParamsQuery])) :
                undefined
    }
}

export const TempToType = [
    {tableName: "zsk_personal_temp", type: "personal", title: "人物"},
    {tableName: "zsk_org_temp", type: "organization", title: "机构"},
    {tableName: "zsk_event_temp", type: "event", title: "事件"},
    {tableName: "zsk_geographical_temp", type: "geographical", title: "地名"},
    {tableName: "zsk_product_temp", type: "product", title: "物产"},
]

/**
 * 转换数据格式
 * @returns {Promise<*[]>}
 */
export const transitionList = async (data, arr) => {
    for (let i in data) {
        if (data[i].tableName === 'zsk_personal_temp') {
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
        if (data[i].tableName === "zsk_org_temp") {
            let obj = {
                title: data[i].chiOrganizationName || "不详",
                type: TempToType.find(res => {
                    return res.tableName === data[i].tableName
                }).title,
                sourceName: data[i].sourceName || "不详", //出处
                biography: data[i].description || "暂无",
                biography_highlight: data[i].biography_highlight || "暂无"
            }
            arr.push(obj)
        }
        if (data[i].tableName === "zsk_event_temp") {
            let obj = {
                title: data[i].chiEventName || "不详",
                type: TempToType.find(res => {
                    return res.tableName === data[i].tableName
                }).title,
                sourceName: data[i].sourceName || "不详", //出处
                biography: data[i].description || "暂无",
                biography_highlight: data[i].biography_highlight || "暂无"
            }
            arr.push(obj)
        }
        if (data[i].tableName === "zsk_geographical_temp") {
            let obj = {
                title: data[i].geographicalName || "不详",
                type: TempToType.find(res => {
                    return res.tableName === data[i].tableName
                }).title,
                sourceName: data[i].sourceName || "不详", //出处
                biography: data[i].azimuth || "暂无",
                biography_highlight: data[i].biography_highlight || "暂无"
            }
            arr.push(obj)
        }
        if (data[i].tableName === "zsk_product_temp") {
            let obj = {
                title: data[i].productName || "不详",
                type: TempToType.find(res => {
                    return res.tableName === data[i].tableName
                }).title,
                sourceName: data[i].sourceName || "不详", //出处
                biography: data[i].description || "暂无",
                biography_highlight: data[i].biography_highlight || "暂无"
            }
            arr.push(obj)
        }
    }
}



