import '../style/chart.scss'
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";
import {ChartImageList} from "@/composent/ChartImageList/ChartImageList.jsx";
import {Pageing} from "@/composent/pageing/Pageing.jsx";
import React from "react";
export function LiteratureChart() {
    return (
        <div className={"literature_chart_container"}>
            <div className={"literature_article_container_know_bar"}>
                <div className={"literature_article_container_know_bar_title"}>相关知识</div>
                <div className={"literature_article_container_know_bar_result"}>共 8 条结果</div>
            </div>
            <div className={"literature_chart_container_list"}>
                <div className={"literature_chart_container_list_let"}>
                    <LeftNavBox></LeftNavBox>
                </div>
                <div className={"literature_chart_container_list_rit"}>
                    <ChartImageList>
                        <div className={"literature_chart_container_list_rit_li_info"}>
                            <div className={"literature_chart_container_list_rit_li_title"}>南京市區簡圖</div>
                            <div className={"literature_chart_container_list_rit_li_cate"}>
                                <span>分类号</span>
                                C62
                            </div>
                            <div className={"literature_chart_container_list_rit_li_chart"}>
                                <div className={"literature_chart_container_list_rit_li_chart_type"}
                                     style={{paddingLeft: 0}}>
                                    <span>图表类型</span>
                                    地图
                                </div>
                                <div className={"literature_chart_container_list_rit_li_chart_type"}>
                                    <span>图表类型</span>
                                    地图
                                </div>
                                <div className={"literature_chart_container_list_rit_li_chart_type"}
                                     style={{borderRight: 0}}>
                                    <span>图表类型</span>
                                    地图
                                </div>
                            </div>
                        </div>
                    </ChartImageList>
                </div>
            </div>
            <div style={{marginTop: "20px"}}>
                <Pageing></Pageing>
            </div>
        </div>
    )
}
