import '../style/homeBody.scss'
import {useState} from "react";

export function HomeBody() {
    const relationDat = [
        {title: "人物社会关系网络分析", img: "home_relation.png"},
        {title: "地理名称历史沿革分析", img: "home_relation.png"},
        {title: "历史事件时空维度分析", img: "home_relation.png"},
        {title: "志书机构时空维度分析", img: "home_relation.png"},
        {title: "志书物产专题分析", img: "home_relation.png"},
        {title: "地理-人物关联分析", img: "home_relation.png"},
    ]
    const knowButtonList = [
        {title: "人物", key: "1"},
        {title: "机构", key: "2"},
        {title: "事件", key: "3"},
        {title: "地名", key: "4"},
        {title: "物产", key: "5"},
    ]

    const [relationList] = useState(relationDat)
    const [knowButtonGroup] = useState(knowButtonList)
    const [knowDetailCardList] = useState(Array(10).fill(undefined, undefined, undefined))
    const [knowViewCardList] = useState(Array(10).fill(undefined, undefined, undefined))
    const [ChartList] = useState(Array(10).fill(undefined, undefined, undefined))
    const [assetsList] = useState(Array(4).fill(undefined, undefined, undefined))

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
                <div className={"home_body_knowledge_title"}></div>
                <div className={"home_body_knowledge_head"}>
                    <div className={"home_body_knowledge_button_group"}>
                        {knowButtonGroup.map((res, index) => {
                            return (
                                <div className={"home_body_knowledge_button"} key={index}>{res.title}</div>
                            )
                        })}
                    </div>
                    <div className={"home_body_knowledge_head_radio_group"}>
                        <label>
                            <input type={"radio"} className={"home_body_knowledge_head_radio"}></input>
                            <span>按浏览量排列</span>
                        </label>
                        <label>
                            <input type={"radio"} className={"home_body_knowledge_head_radio"}></input>
                            <span>
                            按关联知识量排列
                        </span>
                        </label>
                    </div>
                </div>
                <div className={"home_body_knowledge_box"}>
                    {knowDetailCardList.map((res, index) => {
                        return (
                            <div key={index} className={"home_body_knowledge_box_container"}>
                                <div className={"home_body_knowledge_box_header"}>
                                    <div className={"home_body_knowledge_box_header_left"}>
                                        <div className={"home_body_knowledge_box_title"}>杜甫</div>
                                        <div className={"home_body_knowledge_icon"}></div>
                                    </div>
                                    <div className={"home_body_knowledge_box_header_rit"}>
                                        <div className={"home_body_knowledge_box_header_left_icon"}></div>
                                        <div className={"home_body_knowledge_box_header_left_num"}>1231</div>
                                    </div>
                                </div>
                                <div className={"home_body_knowledge_box_info"}>
                                    <div className={"home_body_knowledge_box_info_detail"}>
                                        <span>时代</span>唐
                                    </div>
                                    <div className={"home_body_knowledge_box_info_detail"}>
                                        <span>时代</span>杜甫字子美。唐襄陽人。膳部郞 審言孫。至德乾元間。以拾遺出爲華州
                                        司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                        司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                        司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                        司功。屬關輔機。輒棄123123123131313131231231312312312
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={"home_body_knowledge_next"}>
                    <div className={"home_body_knowledge_next_button"}>
                        换一批
                    </div>
                    <div className={"home_body_knowledge_next_button"}>
                        换一批
                    </div>
                </div>
                <div className={"home_body_wenxian"}>
                    <div className={"home_body_wenxian_title"}></div>
                    <div className={"home_body_wenxian_body"}>
                        <div className={"home_body_wenxian_body_arrow"} style={{marginRight: "83px"}}></div>
                        <div className={"home_body_wenxian_body_list"}>
                            {knowViewCardList.map((res, index) => {
                                return <div key={index} className={"home_body_wenxian_body_list_view"}>
                                    <div className={"home_body_wenxian_body_list_view_image"}></div>
                                    <div className={"home_body_wenxian_body_list_view_title"}>大中华地理志</div>
                                    <div className={"home_body_wenxian_body_list_view_user"}>林传甲 编</div>
                                    <div className={"home_body_wenxian_body_list_view_date"}>
                                        <div className={"home_body_wenxian_body_list_view_date_text"}>1920.01.10</div>
                                        <div className={"home_body_wenxian_body_list_view_date_pre"}>
                                            <div className={"home_body_wenxian_body_list_view_date_pre_image"}></div>
                                            <div className={"home_body_wenxian_body_list_view_date_pre_title"}>1232
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className={"home_body_wenxian_body_arrow"} style={{
                            transform: "rotate(180deg)",
                            marginLeft: "83px"
                        }}></div>
                    </div>
                    <div className={"home_body_wenxian_more_body"}>
                        查看更多
                    </div>
                </div>
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
