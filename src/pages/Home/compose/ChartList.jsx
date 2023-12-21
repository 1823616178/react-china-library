import '../style/Chartlist.scss'
import {useState} from "react";

export const ChartList = () => {
    const [ChartList] = useState(Array(10).fill(undefined, undefined, undefined))

    return (
        <div className={"home_chart_container"}>
            <div className={"home_chart_container_title"}></div>
            <div className={"home_chart_container_body"}>
                <div className={"home_chart_container_arrow"} style={{transform: "rotate(180deg)"}}></div>
                <div className={"home_chart_container_list"}>
                    {ChartList.map((res, index) => {
                        return <div key={index} className={"home_chart_container_list_li"}>
                            <div className={"home_chart_container_list_li_image_card"}>
                                <div className={"home_chart_container_list_li_image"}></div>
                            </div>
                            <div className={"home_chart_container_list_li_type"}>
                                <div className={"home_chart_container_list_li_type_title"}>类型
                                    <span>统计表</span>
                                </div>
                                <div className={"home_chart_container_list_li_type_pre"}>
                                    <div className={"home_chart_container_list_li_type_pre_icon"}></div>
                                    <div className={"home_chart_container_list_li_type_pre_number"}>342</div>
                                </div>
                            </div>
                            <div className={"home_chart_container_list_li_title"}>附南京市市區面積表</div>
                        </div>
                    })}
                </div>
                <div className={"home_chart_container_arrow"}></div>
            </div>
            <div className={"home_chart_container_button"}>查看更多</div>
        </div>
    )
}
