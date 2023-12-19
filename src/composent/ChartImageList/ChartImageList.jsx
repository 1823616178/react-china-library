import './style/index.scss'
import {useState} from "react";

export function ChartImageList(props) {
    let [dataList] = useState(Array(10).fill())

    return (
        <div className={"chart_list_container"}>
            {dataList.map((res, index) => {
                return <div key={index} className={"literature_chart_container_list_rit_li"}>
                    <div className={"literature_chart_container_list_rit_li_image"}>
                        <div className={"literature_chart_container_list_rit_li_image_content"}></div>
                    </div>
                    {props.children}
                </div>
            })}
        </div>
    )
}
