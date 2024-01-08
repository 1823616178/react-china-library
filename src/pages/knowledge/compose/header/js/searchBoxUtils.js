/**
 * 新增form数据
 * @param submitList
 * @param setSubmitList
 */
export const pushSubmitObjToArray = (submitList, setSubmitList) => {
    let submitObject = {
        field: "sourceName",
        keyword: "",
        match: "fuzzy",
        relation: "must"
    }
    setSubmitList([...submitList, submitObject])
}
/**
 * 删除form数据
 */
export const deleteSubmitForm = (submitList, setSubmitList, index) => {
    if (submitList.length > 1) {
        const arr = submitList.filter((item, i) => {
            return index !== i
        })
        setSubmitList(arr)
    }
}

/**
 * 修改特定值
 * @param event
 * @param data
 * @param setData
 * @param index
 * @param key
 */
export const changeValue = (event, data, setData, index, key) => {
    console.log(event.target.value)
    const arr = data.map((res, i) => {
        if (i === index) {
            return {...res, [key]: event.target.value}
        }
        return {...res}
    })
    setData(arr)
}
/**
 * 重置
 * @param setSubmitList
 */
export const resetValue = (setSubmitList) => {
    let submitObject = {
        field: "sourceName",
        keyword: "",
        match: "fuzzy",
        relation: "must"
    }
    setSubmitList([submitObject])
}

