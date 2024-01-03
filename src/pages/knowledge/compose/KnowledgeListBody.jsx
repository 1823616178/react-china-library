import '../style/KnowledgeListBody.scss'
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";
import {useEffect, useState} from "react";
import {calculateKnowList, packageAdvanceList} from "@/utils/common.js";
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";
import {
    advancedRetrievalParams,
    getEventApiList,
    getFirstTypeCountForHighSearch,
    getGeographicalApiList, getInitialsInfo,
    getOrganizationApiList,
    getPersonalAPiList,
    getPersonalAPiListParams,
    getProductApiList
} from "@/api/knowledge.js";
import {advancedQuery, firstQuery, listQuery, transitionList} from "@/pages/knowledge/js/common.js";
import {cleanup} from "@testing-library/react";


export function KnowledgeListBody() {
    const [selectTag, setSelectTag] = useState(0)
    const [buildSelectTag, setBuildSelectTag] = useState(0)
    const [timerSelectTag, setTimerSelectTag] = useState(0)
    const [typeList, setTypeList] = useState([])
    const [advanceList, setAdvanceList] = useState([])
    const [knowledgeList, setKnowledgeList] = useState([])
    let allEnglishLetter = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    let [letterList] = useState(allEnglishLetter)
    let [resultList, setResultList] = useState([])

    const [{data: knowLedgeTypeNumber, loading}, refetch] = getFirstTypeCountForHighSearch(firstQuery)
    const [{
        data: advanceParams,
        advancedLoading,
        advancedError
    }, advancedRefetch] = advancedRetrievalParams(advancedQuery)
    const [adaParamsQuery, setAdaParamsQuery] = useState([])

    const [{data: initialsInfoList}, reGetInfoList] = getInitialsInfo({advancedRetrievalParams: listQuery(adaParamsQuery).advancedRetrievalParams})
    const [{data: knowLedgePersonalList}, loadMoreFetch] = getPersonalAPiList(listQuery(adaParamsQuery))



    /**
     * 当改变主选项时
     * @param data
     * @param query
     * @returns {Promise<void>}
     */
    const onChangeSelectTag = async (data, query) => {
        console.log(query)
        await setSelectTag(data)
        let type = typeList[data]?.type
        await getDataByType(type, query ? query : [])
    }
    /**
     * 当改变BuildIndex时
     */
    const onChangeBuildTag = async (data) => {
        await setBuildSelectTag(data)
        await getAdvanceList(0)
        await onChangeSelectTag(selectTag, adaParamsQuery)
    }
    /**
     * 当改变
     * @param data
     */
    const onChangeTimerTag = async (data) => {
        await setTimerSelectTag(data)
        await getAdvanceList(1)
        await onChangeSelectTag(selectTag, adaParamsQuery)
    }

    const getAdvanceList = (type) => {
        if (advanceList.length > 0) {
            let params
            if (type === 0) {
                params = advanceList[type]?.children[buildSelectTag]
            }
            if (type === 1) {
                params = advanceList[type]?.children[timerSelectTag]
            }
            if (params) {
                let index = adaParamsQuery.findIndex(res => res.field === params.columnName)
                if (index > -1) {
                    let arr = adaParamsQuery
                    arr[index] = {
                        relation: "must",
                        field: params.columnName,
                        keyword: params.title,
                        match: "term"
                    }
                    setAdaParamsQuery(arr)
                } else {
                    let arr = adaParamsQuery
                    let obj = {
                        relation: "must",
                        field: params.columnName,
                        keyword: params.title,
                        match: "term"
                    }
                    arr.push(obj)
                    setAdaParamsQuery(arr)
                }
            }
        }
    }
    const getDataByType = (type, params) => {
        switch (type) {
            case "zsk_personal_temp":
                loadMoreFetch(getPersonalAPiListParams(listQuery(params)))
                break;
            case "zsk_org_temp":
                loadMoreFetch(getOrganizationApiList(listQuery(params)))
                break;
            case "zsk_event_temp":
                loadMoreFetch(getEventApiList(listQuery(params)))
                break;
            case "zsk_geographical_temp":
                loadMoreFetch(getGeographicalApiList(listQuery(params)))
                break;
            case "zsk_product_temp":
                loadMoreFetch(getProductApiList(listQuery(params)))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        Init().then().catch(e => {
            console.log(e)
        })
    }, [knowLedgePersonalList])

    useEffect(() => {
        calculateKnowList(knowLedgeTypeNumber?.data || [], setTypeList)
    }, [knowLedgeTypeNumber])

    useEffect(() => {
        packageAdvanceList(advanceParams?.data || [], setAdvanceList)
    }, [advanceParams]);

    const Init = async () => {
        let list = []
        await transitionList(knowLedgePersonalList?.data?.rows, list)
        await setKnowledgeList(list)
    }


    const moreHeaderSlotCompose = () => {
        return (
            <div className={"knowledge_list_container_rit_list_obj"}>
                <div className={"knowledge_list_container_rit_list_obj_img"}></div>
                <div className={"knowledge_list_container_rit_list_obj_title"}>查看知识图谱</div>
            </div>
        )
    }

    const filterNavBox = (result, index) => {
        if (result.type === "zsk_personal_construction_units") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        selectTag={buildSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_personal_period") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        selectTag={timerSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeTimerTag}></LeftNavBox>
                </div>
            )
        }

    }
    return (
        <div className={"knowledge_list_container"}>
            <div className={"knowledge_list_container_let"}>
                <LeftNavBox selectTag={selectTag}
                            title={"知识类型"}
                            assetsList={typeList}
                            setTag={onChangeSelectTag}></LeftNavBox>
                {
                    advanceList.map((result, index) => {
                        return (
                            filterNavBox(result, index)
                        )
                    })
                }

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
                    <KnowledgeList data={knowledgeList} moreHeaderSlot={moreHeaderSlotCompose()}></KnowledgeList>
                </div>
            </div>
        </div>
    )
}
