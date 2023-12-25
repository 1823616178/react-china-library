import React from "react";
import './style/index.scss'

export function KnowledgeList({moreHeaderSlot, moreInfoSlot, data}) {
    return (
        <>
            {data.map((res, index) => {
                return <div key={index} className={"literature_article_container_body_rit_li"}>
                    <div className={"literature_article_container_body_rit_li_title"}>
                        <div className={"literature_article_container_body_rit_li_title_title"}>{res.title}</div>
                        <div className={"literature_article_container_body_rit_li_title_tag"}>{res.type}</div>
                        <div className={"literature_article_container_body_rit_li_title_search"}></div>
                        <div className={"literature_article_container_body_rit_li_title_ley"}>作为关键词查找</div>
                        {moreHeaderSlot}
                    </div>
                    <div className={"literature_article_container_body_rit_li_detail"}>
                        <span>知识出处</span>
                        <span style={{color: "#E36A39", textDecoration: 'underline'}}>{res.sourceName}</span>
                    </div>
                    <div className={"literature_article_container_body_rit_li_detail"}>
                        <div className={"literature_article_container_body_rit_li_detail_content"}>
                            <span>人物传略</span>
                            {res.biography}
                        </div>
                    </div>
                    {moreInfoSlot}
                </div>
            })}
        </>
    )
}
