import '../style/homeBody.scss'
import {useEffect, useState} from "react";
import {listByViewsOrder} from "@/api/home.js";
import {KnowledgeList} from "@/pages/Home/compose/KnowledgeList.jsx";
import {LibraryList} from "@/pages/Home/compose/LibraryList.jsx";

export function HomeBody() {
    const relationDat = [
        {title: "人物社会关系网络分析", img: "home_relation.png"},
        {title: "地理名称历史沿革分析", img: "home_relation.png"},
        {title: "历史事件时空维度分析", img: "home_relation.png"},
        {title: "志书机构时空维度分析", img: "home_relation.png"},
        {title: "志书物产专题分析", img: "home_relation.png"},
        {title: "地理-人物关联分析", img: "home_relation.png"},
    ]
    const [relationList] = useState(relationDat)
    const [knowDetailCardList, setKnowDetailCardList] = useState(Array(10).fill(undefined, undefined, undefined))
    const [ChartList] = useState(Array(10).fill(undefined, undefined, undefined))
    const [assetsList] = useState(Array(4).fill(undefined, undefined, undefined))
    let knowDetailQuery = {
        page: 1,
        rows: 8,
        type: 1,
        index: 2
    }
    const [{data: OrderList, loading, error}, refetch] = listByViewsOrder(knowDetailQuery)

    /**
     * 获取知识列表
     * @returns {Promise<void>}
     */
    const getKnowDetailData = async () => {

    }

    const Init = async () => {
        await getKnowDetailData()
    }

    useEffect(() => {
        setKnowDetailCardList(OrderList ? OrderList?.data?.rows : [])
    }, [OrderList]);

    return (
        <>
            <div className={"home_body_container"}>
                <div className={"home_body_container_search"}>
                    <div className={"home_body_container_search_title"}>
                        <div className={"home_body_container_search_title_line"}></div>
                        <div className={"home_body_container_search_title_font"}>图谱可视化检索</div>
                    </div>
                    <div className={"home_body_container_search_info"}>
                        图谱可视化检索基于知识间的关联关系，提供支撑复杂网络的可视化检索 、展示
                        与分析工具并支持双边关系揭示、联想检索、深度关系挖掘、交互式查询与分析、 知识溯源跳转。
                    </div>
                    <div className={"home_body_container_search_button"}>去检索</div>
                </div>
                <div className={"home_body_container_image"}>
                    <div className={"home_body_container_image_border"}></div>
                </div>
            </div>
            <div className={"home_body_list"}>
                {relationList.map((item, index) => (
                    <div className={"home_body_list_box"} key={index}>
                        <div className={"home_body_list_box_image"}></div>
                        <div className={"home_body_list_box_title"}>{item.title}</div>
                    </div>
                ))}
            </div>
            <div className={"home_body_knowledge_container"}>
                <KnowledgeList></KnowledgeList>
                <LibraryList></LibraryList>
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
                <div className={"home_assets_type"}>
                    <div className={"home_assets_type_title"}></div>
                    <div className={"home_assets_type_list"}>
                        {assetsList.map((item, index) => (
                            <div key={index} className={"home_assets_type_list_li"}>
                                <div className={"home_assets_type_list_li_title"}>文献</div>
                                <div className={"home_assets_type_list_li_info"}>
                                    汇聚国图民国时期出版的区域志（通志、省志、州志、县志）及专业志共82种、300余册，涵盖xx个地区，为研究民国时期地方山川地貌、政治经济、历史文化、物产风俗提供图像、文本、目录等多种基础资源地检索与阅览。
                                </div>
                                <div className={"home_assets_type_list_li_button"}>查看更多</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
