import React from "react";
import './style/index.scss'

export function KnowledgeList({moreHeaderSlot, moreInfoSlot}) {
    return (
        <div className={"literature_article_container_body_rit_li"}>
            <div className={"literature_article_container_body_rit_li_title"}>
                <div className={"literature_article_container_body_rit_li_title_title"}>林传甲</div>
                <div className={"literature_article_container_body_rit_li_title_tag"}>人物</div>
                <div className={"literature_article_container_body_rit_li_title_search"}></div>
                <div className={"literature_article_container_body_rit_li_title_ley"}>作为关键词查找</div>
                {moreHeaderSlot}
            </div>
            <div className={"literature_article_container_body_rit_li_detail"}>
                <span>知识出处</span>
                <span style={{color: "#E36A39", textDecoration: 'underline'}}>大中華湖北省地理志</span>
            </div>
            <div className={"literature_article_container_body_rit_li_detail"}>
                <div className={"literature_article_container_body_rit_li_detail_content"}>
                    <span>人物传略</span>
                    唐成都人。精術數。官火井令。嘗精術數。官火井令。嘗精術數。官火井令。嘗至閬州。寓盘龍山。
                    唐成都人。精術數。官火井令。嘗至閬州。寓盘龍山。 唐成都人。精術數。官火井令。嘗至閬州。寓盘龍山。
                    唐成都人。精術數。官火井令。嘗至閬州。寓盘龍山。 唐成都人。精術數。官火井令。嘗至閬州。寓盘龍山。
                    唐成都人。精術數。官火井令。嘗至閬州。寓盘龍山。
                </div>
            </div>
            {moreInfoSlot}
        </div>
    )
}
