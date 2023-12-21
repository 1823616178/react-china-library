export const diffMoreTypeTitle = (res, tagIndex) => {
    if (tagIndex === 1) {
        return (
            <div className={"home_body_knowledge_box_title"}>
                <div
                    className={"home_body_knowledge_box_title_font"}>{res?.personalNameIndex || ""}</div>
                {res?.personalName || ""}
            </div>
        )
    }
    if (tagIndex === 2) {
        return (
            <div className={"home_body_knowledge_box_title"}>
                <div
                    className={"home_body_knowledge_box_title_font"}>{res?.geographicalNameIndex || ""}</div>
                {res?.geographicalName || ""}
            </div>
        )
    }
    if (tagIndex === 3) {
        return (
            <div className={"home_body_knowledge_box_title"}>
                <div
                    className={"home_body_knowledge_box_title_font"}>{res?.chiEventNameIndex || ""}</div>
                {res?.chiEventName || ""}
            </div>
        )
    }
    if (tagIndex === 4) {
        return (
            <div className={"home_body_knowledge_box_title"}>
                <div
                    className={"home_body_knowledge_box_title_font"}>{res?.chiOrganizationNameIndex || ""}</div>
                {res?.chiOrganizationName || ""}
            </div>
        )
    }
    if (tagIndex === 5) {
        return (
            <div className={"home_body_knowledge_box_title"}>
                <div
                    className={"home_body_knowledge_box_title_font"}>{res?.productNameIndex || ""}</div>
                {res?.productName || ""}
            </div>
        )
    }
}
