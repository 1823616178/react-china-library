export const pushSubmitObjToArray = (submitList, setSubmitList) => {
    let submitObject = {
        field: "personalName",
        keyword: "",
        match: "fuzzy",
        relation: "must"
    }
    submitList.push(submitObject)
    setSubmitList(submitList)
}
