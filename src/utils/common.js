export const knowledgeTypeList = [
    {title: "人物", value: 0, type: 'zsk_personal_temp'},
    {title: "机构", value: 0, type: 'zsk_org_temp'},
    {title: "事件", value: 0, type: 'zsk_event_temp'},
    {title: "地名", value: 0, type: 'zsk_geographical_temp'},
    {title: "物产", value: 0, type: 'zsk_product_temp'},
]

export const calculateKnowList = (data = [], setTypeList) => {
    if (data.length > 0) {
        for (let i in data) {
            let index = knowledgeTypeList.findIndex(res => res.type === data[i].key)
            if (index > -1) {
                knowledgeTypeList[index].value = data[i].count
            }
        }
        setTypeList(knowledgeTypeList)
    }
}

export const packageAdvanceList = (data = [], setAdvanceList) => {
    if (data.length > 0) {
        let list = []
        for (let i in data) {
            let arr = []
            if (data[i].children) {
                for (let e in data[i].children) {
                    let obj = {
                        title: e.classificationName || '',
                        type: e.categoryType || "",
                        value: e.contentNum || 0
                    }
                    arr.push(obj)
                }
            }
            list.push(arr)
        }
        setAdvanceList(list)
    }
}

