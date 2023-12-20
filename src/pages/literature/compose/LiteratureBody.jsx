import {LiteratureList} from "@/pages/literature/compose/LiteratureList.jsx";
import '../style/index.scss'
import {useState} from "react";
import activeTabImage from '@/assets/img/literature/tab_back.png'
import {ArrowSelect} from "@/composent/ArrowSelect/ArrowSelect.jsx";

export const LiteratureBody = () => {
    const [ZiYuanIsSelect, setZiYuan] = useState(0)
    const [ziyuanList] = useState([{title: "文献", num: 30}, {title: "篇章", num: 30}])
    const ziyuanStyle = {
        backgroundColor: "#F0E6E1",
        backgroundImage: `url(${activeTabImage})`,
        backgroundRepeat: "no-repeat"
    }
    const fenLeiList = useState([])
    const [fenleiIsSelect, setFenLei] = useState(0)


    return (
        <div className={"Literature_container"}>
            <div className={"Literature_container_left"}>
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
                <ArrowSelect></ArrowSelect>
                <ArrowSelect></ArrowSelect>
            </div>
            <LiteratureList></LiteratureList>
        </div>
    )
}
