import React, {useState} from "react";
import activeTabImage from "@/assets/img/literature/tab_back.png";
import './style/index.scss'

export function LeftNavBox({selectTag, setTag, title = "暂无标题", assetsList = [], type = 1, setValue}) {
    const ziyuanStyle = {
        backgroundColor: "#F0E6E1",
        backgroundImage: `url(${activeTabImage})`,
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className={"Literature_container_left_ziyuan"}>
            <div className={"Literature_container_left_head"}>
                <div className={"Literature_container_left_head_title"}>{title}</div>
            </div>
            <div className={"Literature_container_left_head_body"}>
                {assetsList.map((res, index) => {
                    return <div
                        onClick={() => {
                            setTag(index, type, setValue)
                        }}
                        key={index} className={"Literature_container_left_head_body_tab"}
                        style={selectTag === index ? ziyuanStyle : {}}>
                        <div className={"Literature_container_left_head_body_tab_font"}>
                            {res.title}
                        </div>
                        <div className={"Literature_container_left_head_body_tab_font_num"}>
                            ({res.value})
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}
