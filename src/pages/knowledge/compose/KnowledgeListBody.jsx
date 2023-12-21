import '../style/KnowledgeListBody.scss'
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";
import {useEffect, useState} from "react";
import {calculateKnowList, knowledgeTypeList, packageAdvanceList} from "@/utils/common.js";
import {TypeSelect} from "@/composent/TypeSelect/TypeSelect.jsx";
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";
import {advancedRetrievalParams, getFirstTypeCountForHighSearch} from "@/api/knowledge.js";
import {advancedQuery, firstQuery} from "@/pages/knowledge/js/common.js";

export function KnowledgeListBody() {
    const [selectTag, setSelectTag] = useState(0)
    const [typeList, setTypeList] = useState([])
    const [advanceList, setAdvanceList] = useState([])

    let allEnglishLetter = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    let [letterList] = useState(allEnglishLetter)


    const [{data: knowLedgeTypeNumber, loading}, refetch] = getFirstTypeCountForHighSearch(firstQuery)
    const [{
        data: advanceParams,
        advancedLoading,
        advancedError
    }, advancedRefetch] = advancedRetrievalParams(advancedQuery)

    useEffect(() => {
        calculateKnowList(knowLedgeTypeNumber?.data || [], setTypeList)
    }, [knowLedgeTypeNumber])

    useEffect(() => {
        packageAdvanceList(advanceParams?.data || [], setAdvanceList)
        console.log(advanceList)
    }, [advanceParams]);

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
                <LeftNavBox selectTag={selectTag}
                            title={"知识类型"}
                            assetsList={typeList}
                            setTag={setSelectTag}></LeftNavBox>
                <div style={{marginTop: "20px"}}>
                    <LeftNavBox selectTag={selectTag}
                                title={"建设单位"}
                                assetsList={typeList}
                                setTag={setSelectTag}></LeftNavBox>
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
