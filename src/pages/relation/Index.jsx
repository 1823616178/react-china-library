import './style/index.scss'
import {useState} from "react";

export function RelationIndex() {
    const relationDat = [
        {title: "人物社会关系网络分析", img: "home_relation.png"},
        {title: "地理名称历史沿革分析", img: "home_relation.png"},
        {title: "历史事件时空维度分析", img: "home_relation.png"},
        {title: "志书机构时空维度分析", img: "home_relation.png"},
        {title: "志书物产专题分析", img: "home_relation.png"},
        {title: "地理-人物关联分析", img: "home_relation.png"},
    ]
    const [relationList] = useState(relationDat)
    return (
        <div className={"banner_container_relation"}>
            <div className={"banner_container_header"}>
                <div className={"banner_container_title"}>图谱可视化检索</div>
                <div className={"banner_container_input"}>
                    <div className={"banner_container_search"}>
                        <label>
                            <input className={"banner_container_input_in"}/>
                        </label>
                        <div className={"banner_container_input_button"}>搜索</div>
                        <div className="triangle"></div>
                    </div>
                </div>
                <div className={"banner_container_group"}>
                    <div className={"banner_container_group_tag"}>安东</div>
                    <div className={"banner_container_group_tag"}>安东</div>
                    <div className={"banner_container_group_tag"}>安东</div>
                    <div className={"banner_container_group_tag"}>安东</div>
                    <div className={"banner_container_group_tag"}>安东</div>
                </div>
            </div>
            <div className={"home_body_list_relation"}>
                {relationList.map((item, index) => (
                    <div className={"home_body_list_box"} key={index}>
                        <div className={"home_body_list_box_image"}></div>
                        <div className={"home_body_list_box_title"}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
