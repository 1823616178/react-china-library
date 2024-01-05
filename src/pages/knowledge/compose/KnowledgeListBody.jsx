import '../style/KnowledgeListBody.scss'
import {ListHeader} from "./ListHeader/ListHeader.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";
import React, {useEffect, useState} from "react";
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
import {clearCache, resetConfigure} from "axios-hooks";
import {HomeBanner} from "@/composent/header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import {BodyHead} from "@/pages/knowledge/compose/bodyHead/BodyHead.jsx";


export function KnowledgeListBody() {
    const [selectTag, setSelectTag] = useState(0)
    const [buildSelectTag, setBuildSelectTag] = useState(undefined) //建设单位
    const [timerSelectTag, setTimerSelectTag] = useState(undefined) // 时代选项
    const [eventSelectTag, setEventSelectTag] = useState(undefined) // 事件类型
    const [orgSelectTag, setOrgSelectTag] = useState(undefined) // 机构类型
    const [geoSelectTag, setGeoSelectTag] = useState(undefined) // 地名类型
    const [productTag, setProductSelectTag] = useState(undefined) // 物产类型
    const [typeList, setTypeList] = useState([])
    const [advanceList, setAdvanceList] = useState([])
    const [knowledgeList, setKnowledgeList] = useState([])
    let allEnglishLetter = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    let [letterList] = useState(allEnglishLetter)
    let [letterActiveList, setLetterActiveList] = useState([])
    let [checkboxActiveArr, setCheckboxActiveArr] = useState([])
    let [resultList, setResultList] = useState([])

    const [{data: knowLedgeTypeNumber, loading}, refetch] = getFirstTypeCountForHighSearch(firstQuery)
    const [{
        data: advanceParams,
        advancedLoading,
        advancedError
    }, advancedRefetch] = advancedRetrievalParams(advancedQuery(selectTag))
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
        await setSelectTag(data)
        let type = typeList[data]?.type
        await getDataByType(type, query ? query : [])
        if (query.length === 0) {
            await clearValue()
        }
    }

    /**
     * 删除标签方法
     * @param func
     * @param type
     */
    const deleteTagFunction = async (func, type) => {
        func(undefined)
        if (type) {
            let deleteParam = adaParamsQuery.findIndex(res => res.field === type)
            if (deleteParam > -1) adaParamsQuery.splice(deleteParam, 1)
            await onChangeSelectTag(selectTag, adaParamsQuery)
        }
    }

    /**
     * 当改变BuildIndex时
     */
    const onChangeBuildTag = async (data, type, setValue) => {
        await setValue(data)
        await getAdvanceList(type, data)
        await onChangeSelectTag(selectTag, adaParamsQuery)
    }

    /**
     * 清除类型
     */
    const clearValue = async () => {
        setBuildSelectTag(undefined)
        setTimerSelectTag(undefined)
        setEventSelectTag(undefined)
        setOrgSelectTag(undefined)
        setGeoSelectTag(undefined)
        setProductSelectTag(undefined)
        setAdaParamsQuery([])
    }

    const getAdvanceList = (type, index) => {
        if (advanceList.length > 0) {
            let params = advanceList[type]?.children[index]
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

    const getDataByType = async (type, params) => {
        switch (type) {
            case "zsk_personal_temp":
                await loadMoreFetch(getPersonalAPiListParams(listQuery(params)))
                break;
            case "zsk_org_temp":
                await loadMoreFetch(getOrganizationApiList(listQuery(params)))
                break;
            case "zsk_event_temp":
                await loadMoreFetch(getEventApiList(listQuery(params)))
                break;
            case "zsk_geographical_temp":
                await loadMoreFetch(getGeographicalApiList(listQuery(params)))
                break;
            case "zsk_product_temp":
                await loadMoreFetch(getProductApiList(listQuery(params)))
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

    useEffect(() => {
        setLetterActiveList(initialsInfoList?.data || [])
    }, [initialsInfoList])

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
        if (result.type === "zsk_personal_construction_units" || result.type === "zsk_org_construction_units" || result.type === "zsk_product_construction_units" || result.type === "zsk_event_construction_units" || result.type === "zsk_geographical_construction_units") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        selectTag={buildSelectTag}
                        type={index}
                        title={result.title}
                        setValue={setBuildSelectTag}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_personal_period") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        type={index}
                        selectTag={timerSelectTag}
                        setValue={setTimerSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_event_type") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        type={index}
                        selectTag={eventSelectTag}
                        setValue={setEventSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_org_type") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        type={index}
                        selectTag={orgSelectTag}
                        setValue={setOrgSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_product_type") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        type={index}
                        selectTag={productTag}
                        setValue={setProductSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
        if (result.type === "zsk_geographical_level") {
            return (
                <div key={index} style={{marginTop: "20px"}}>
                    <LeftNavBox
                        type={index}
                        selectTag={geoSelectTag}
                        setValue={setGeoSelectTag}
                        title={result.title}
                        assetsList={result.children}
                        setTag={onChangeBuildTag}></LeftNavBox>
                </div>
            )
        }
    }

    return (
        <>
            <BodyHead selectTag={selectTag}
                      typeList={typeList}
                      checkboxActiveArr={checkboxActiveArr}
                      setCheckboxActiveArr={setCheckboxActiveArr}
            ></BodyHead>
            <div className={"knowledge_list_container"}>
                <div className={"knowledge_list_container_let"}>
                    <LeftNavBox selectTag={selectTag}
                                type={99}
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
                    <ListHeader
                        buildSelectTag={buildSelectTag}
                        timerSelectTag={timerSelectTag}
                        eventSelectTag={eventSelectTag}
                        orgSelectTag={orgSelectTag}
                        geoSelectTag={geoSelectTag}
                        productTag={productTag}
                        advanceList={advanceList}
                        setBuildSelectTag={setBuildSelectTag}
                        setTimerSelectTag={setTimerSelectTag}
                        setEventSelectTag={setEventSelectTag}
                        setOrgSelectTag={setOrgSelectTag}
                        setGeoSelectTag={setGeoSelectTag}
                        setProductSelectTag={setProductSelectTag}
                        deleteTagFunction={deleteTagFunction}
                    ></ListHeader>
                    <div className={"knowledge_list_container_rit_sort"}>
                        <div className={"knowledge_list_container_rit_sort_title"}>排序筛选：</div>
                        <div className={"knowledge_list_container_rit_sort_all"}>全部</div>
                        <div className={"knowledge_list_container_rit_sort_font_group"}>
                            {letterList.map((res, index) => {
                                return <div className={"knowledge_list_container_rit_sort_font"}
                                            key={index}
                                            style={letterActiveList.find(e => e.keyword === res) ?
                                                {color: "#000"} : {color: "#999"}}>{res}</div>
                            })}
                        </div>
                    </div>
                    <div className={"knowledge_list_container_rit_list"}>
                        <KnowledgeList data={knowledgeList} moreHeaderSlot={moreHeaderSlotCompose()}></KnowledgeList>
                    </div>
                </div>
            </div>
        </>
    )
}
