import '../style/homeBody.scss'
import {useEffect, useState} from "react";
import {listByViewsOrder} from "@/api/home.js";
import {KnowledgeList} from "@/pages/Home/compose/KnowledgeList.jsx";
import {LibraryList} from "@/pages/Home/compose/LibraryList.jsx";
import {ChartList} from "@/pages/Home/compose/ChartList.jsx";
import {AssetList} from "@/pages/Home/compose/AssetList.jsx";

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
                <ChartList></ChartList>
                <AssetList></AssetList>
            </div>
        </>
    )
}
