import '../style/KnowledgeListBody.scss'
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";
import {useEffect, useState} from "react";
import {knowledgeTypeList} from "@/utils/common.js";

export function KnowledgeListBody() {
    const [typeList] = useState(knowledgeTypeList)
    let allEnglishLetter = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    let [letterList] = useState(allEnglishLetter)
    useEffect(() => {
    }, []);
    const moreHeaderSlotCompose = () => {
        return (
            <div className={"knowledge_list_container_rit_list_obj"}>
                <div className={"knowledge_list_container_rit_list_obj_img"}></div>
                <div className={"knowledge_list_container_rit_list_obj_title"}>查看知识图谱</div>
            </div>
        )
    }
    return (
        <div className={"knowledge_list_container"}>
            <div className={"knowledge_list_container_let"}>
                <div className={"knowledge_list_container_let_type"}>
                    <div className={"knowledge_list_container_let_type_title"}>知识类型</div>
                    <div className={"knowledge_list_container_let_type_title_body"}>
                        {typeList.map((res, index) => {
                            return <div key={index} className={"knowledge_list_container_let_type_title_body_checkbox"}>
                                <label>
                                    <input type={"checkbox"}/>
                                    <span>{res.title}</span>
                                </label>
                                <div className={"knowledge_list_container_let_type_title_body_checkbox_num"}>(12)</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={"knowledge_list_container_rit"}>
                <ListHeader></ListHeader>
                <div className={"knowledge_list_container_rit_sort"}>
                    <div className={"knowledge_list_container_rit_sort_title"}>排序筛选：</div>
                    <div className={"knowledge_list_container_rit_sort_all"}>全部</div>
                    <div className={"knowledge_list_container_rit_sort_font_group"}>
                        {letterList.map((res, index) => {
                            return <div className={"knowledge_list_container_rit_sort_font"}
                                        key={index}>{res}</div>
                        })}
                    </div>
                </div>
                <div className={"knowledge_list_container_rit_list"}>
                    <KnowledgeList moreHeaderSlot={moreHeaderSlotCompose()}></KnowledgeList>
                </div>
            </div>

        </div>
    )
}
