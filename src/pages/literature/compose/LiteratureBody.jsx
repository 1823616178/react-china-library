import {LiteratureList} from "@/pages/literature/compose/LiteratureList.jsx";
import '../style/index.scss'
import {useEffect, useState} from "react";
import activeTabImage from '@/assets/img/literature/tab_back.png'
import {ArrowSelect} from "./ArrowSelect/ArrowSelect.jsx";
import {getBookCategory} from "@/api/literature.js";
import {categoryParams, categoryType} from "@/pages/literature/js/base.js";

export const LiteratureBody = () => {
    const [mainSourceType, setMainSourceType] = useState(100)
    const categoryGatherList = useState([])
    const ziyuanStyle = {
        backgroundColor: "#F0E6E1",
        backgroundImage: `url(${activeTabImage})`,
        backgroundRepeat: "no-repeat"
    }
    const fenLeiList = useState([])
    const [fenleiIsSelect, setFenLei] = useState(0)
    const [categoryList, setCategory] = useState(categoryType)

    const [{data: categoryData}, reGetCategory] = getBookCategory(categoryParams(mainSourceType, []))


    /**
     * 改变资源类型列表时
     * @param sourceType
     */
    const changeMainNavTag = (sourceType) => {
        setMainSourceType(sourceType || 100)
    }

    /**
     * 切换导航选项时触发
     * @param data
     */
    const changeCategory = (data) => {
        console.log(data)
    }


    return (
        <div className={"Literature_container"}>
            <div className={"Literature_container_left"}>
                <div className={"Literature_container_left_ziyuan"}>
                    <div className={"Literature_container_left_head"}>
                        <div className={"Literature_container_left_head_title"}>资源类型</div>
                    </div>
                    <div className={"Literature_container_left_head_body"}>
                        {categoryList.map((res, index) => {
                            return <div
                                onClick={() => changeMainNavTag(res?.sourceType)}
                                key={index} className={"Literature_container_left_head_body_tab"}
                                style={mainSourceType === res?.sourceType ? ziyuanStyle : {}}>
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
                {categoryData?.data.map((item, index) => {
                    return <ArrowSelect
                        changeCategory={changeCategory}
                        categoryGatherList={categoryGatherList}
                        title={item?.classificationName || ""}
                        children={item?.children || []}
                        key={index}></ArrowSelect>
                })}
            </div>
            <LiteratureList></LiteratureList>
        </div>
    )
}
