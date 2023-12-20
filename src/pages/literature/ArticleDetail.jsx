import React, {useState} from "react";
import activeTabImage from "@/assets/img/literature/tab_back.png";
import './style/article.scss'
import {LiteratureChart} from "@/pages/literature/compose/LiteratureChart.jsx";
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";
import {Pageing} from "@/composent/pageing/Pageing.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";

export const LiteratureArticleDetail = () => {
    return (
        <div className={"literature_article_container"}>
            <div className={"literature_article_container_nav"}>
                <div className={"literature_article_container_nav_li"}>
                    <div className={"literature_article_container_nav_li_title"}>当前目录</div>
                    <div className={"literature_article_container_nav_li_title"} style={{margin: "0 10px"}}>{">"}</div>
                </div>
                <div className={"literature_article_container_nav_li"}>
                    <div className={"literature_article_container_nav_li_title"}>文献</div>
                    <div className={"literature_article_container_nav_li_title"} style={{margin: "0 10px"}}>{">"}</div>
                </div>
                <div className={"literature_article_container_nav_li"}>
                    <div className={"literature_article_container_nav_li_title"}>篇章详情</div>
                </div>
            </div>
            <div className={"literature_article_container_title"}>大中華湖北省地理志序</div>
            <div className={"literature_article_container_detail"}>
                <p style={{marginRight: "16px", color: "#999999"}}>篇章出处</p><span
                style={{color: "#E36A39", textDecoration: 'underline'}}>大中華湖北省地理志</span>
            </div>
            <div className={"literature_article_container_detail"}>
                <div className={"literature_article_container_detail_li"} style={{paddingLeft: 0}}>
                    <p>并列题名</p>大中华省直
                </div>
                <div className={"literature_article_container_detail_li"}>
                    <p>并列题名</p>大中华省直
                </div>
                <div className={"literature_article_container_detail_li"} style={{borderRight: 0}}>
                    <p>并列题名</p>大中华省直
                </div>
            </div>
            <div className={"literature_article_container_detail"}>
                <div className={"literature_article_container_detail_li"} style={{paddingLeft: 0}}>
                    <p>结构类型</p>序
                </div>
                <div className={"literature_article_container_detail_li"}>
                    <p>语种</p>CHI
                </div>
                <div className={"literature_article_container_detail_li"} style={{borderRight: 0}}>
                    <p>18</p>9
                </div>
            </div>
            <div className={"literature_article_container_detail"}>
                <div className={"literature_article_container_detail_info"}>
                    <p>责任者</p>
                    <div className={"literature_article_container_detail_info_list"}>
                        <div className={"literature_article_container_detail_info_list_li"}>林传甲（总纂） 1941·北京</div>
                        <div className={"literature_article_container_detail_info_list_li"}>林传甲（总纂） 1941·北京</div>
                        <div className={"literature_article_container_detail_info_list_li"}>林传甲（总纂） 1941·北京</div>
                        <div className={"literature_article_container_detail_info_list_li"}>林传甲（总纂） 1941·北京</div>
                        <div className={"literature_article_container_detail_info_list_li"}>林传甲（总纂） 1941·北京</div>
                    </div>
                </div>
            </div>
            <div className={"literature_article_container_detail"}>
                <p>责任者</p>
                <span>/</span>
            </div>
            <div className={"literature_article_container_detail"}>
                <p style={{lineHeight: 2}}>摘要</p>
                <div className={"literature_article_container_detail_article"}>
                    林传甲总纂《大中华分省地理志》中之一册，体例同其他各册相同。分5篇，160章。介绍湖北省概况。马庆龙题书名。文前有名人题词、题诗数篇。
                    《大中华湖北省地理志》采用书目，湖北三道六十九县歌。书后附有后序。
                </div>
            </div>
            <div className={"literature_article_container_know_bar"}>
                <div className={"literature_article_container_know_bar_title"}>相关知识</div>
                <div className={"literature_article_container_know_bar_result"}>共 8 条结果</div>
            </div>
            <div className={"literature_article_container_body"}>
                <div className={"literature_article_container_body_let"}>
                    <LeftNavBox/>
                </div>
                <div className={"literature_article_container_body_rit"}>
                    <KnowledgeList>

                    </KnowledgeList>
                </div>
                <div style={{marginTop: "20px"}}>
                    <Pageing></Pageing>
                </div>
            </div>
            <LiteratureChart/>
        </div>
    )
}
