import React from "react";

export function LeftNav() {
    return (
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
    )
}
