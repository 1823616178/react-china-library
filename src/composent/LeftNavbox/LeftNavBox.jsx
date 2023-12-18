import React, {useState} from "react";
import activeTabImage from "@/assets/img/literature/tab_back.png";
import './style/index.scss'

export function LeftNavBox() {
    const [ZiYuanIsSelect, setZiYuan] = useState(0)
    const [ziyuanList] = useState([{title: "文献", num: 30}, {title: "篇章", num: 30}])
    const ziyuanStyle = {
        backgroundColor: "#F0E6E1",
        backgroundImage: `url(${activeTabImage})`,
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className={"Literature_container_left_ziyuan"}>
            <div className={"Literature_container_left_head"}>
                <div className={"Literature_container_left_head_title"}>资源类型</div>
            </div>
            <div className={"Literature_container_left_head_body"}>
                {ziyuanList.map((res, index) => {
                    return <div
                        onClick={() => {
                            setZiYuan(index)
                        }}
                        key={index} className={"Literature_container_left_head_body_tab"}
                        style={ZiYuanIsSelect === index ? ziyuanStyle : {}}>
                        <div className={"Literature_container_left_head_body_tab_font"}>
                            {res.title}
                        </div>
                        <div className={"Literature_container_left_head_body_tab_font_num"}>
                            ({res.num})
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}
