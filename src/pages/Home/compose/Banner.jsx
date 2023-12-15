import {useEffect, useState} from "react";

export function HomeBanner() {
    const gatherCheckBoxList = [
        {
            value: "全部",
            key: ""
        },
        {
            value: "文献",
            key: ""
        },
        {
            value: "篇章",
            key: ""
        },
        {
            value: "图表",
            key: ""
        },
        {
            value: "全文",
            key: ""
        },
        {
            value: "知识",
            key: ""
        }
    ]
    const [checkboxLTypes] = useState(gatherCheckBoxList)


    useEffect(() => {

    }, []);

    return (
        <div className={"banner_container"}>
            <div className={"banner_container_title"}></div>
            <div className={"banner_container_input"}>
                <div className={"banner_container_search"}>
                    <label>
                        <input className={"banner_container_input_in"}/>
                    </label>
                    <div className={"banner_container_input_button"}>搜索</div>
                </div>
                <div className={"banner_container_input_high"}>高级检索</div>

            </div>
            <div className={"banner_container_select"}>
                {checkboxLTypes.map((res, index) => (
                    <label>
                        <input type={"checkbox"} title={res.value} className={"banner_container_checkbox"}/>
                        <span>{res.value}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}
