import '@/assets/style/SearchBox.scss'
import {useEffect, useRef, useState} from "react";
import {checkboxType} from "@/pages/knowledge/compose/header/js/data.js";
import {pushSubmitObjToArray} from "@/pages/knowledge/compose/header/js/searchBoxUtils.js";

export function SearchBox({changeCheckbox, type}) {
    const [checkboxList, setCheckboxList] = useState([]) //关键字列表
    const submitObject = {
        field: "personalName",
        keyword: "",
        match: "fuzzy",
        relation: "must"
    }
    const [submitList, setSubmitList] = useState([submitObject]) //提交列表
    const layerRef = useRef(null)
    const closeFunc = (event) => {
        if (event.target.className === 'search_box_container') {
            changeCheckbox(false)
        }
    }

    useEffect(() => {
        setCheckboxList(checkboxType?.[type] || [])
    }, [type]);
    return (
        <div className={"search_box_container"} ref={layerRef} onClick={(event) => {
            closeFunc(event)
        }}>
            <div className={"search_box_container_card"}>
                <div className={"search_box_container_card_head"}>
                    <div className={"search_box_container_card_head_title"}>高级检索</div>
                    <div className={"search_box_container_card_head_close"} onClick={() => {
                        changeCheckbox(false)
                    }}></div>
                </div>
                <div className={"search_box_container_card_body"}>
                    <div className={"search_box_container_card_body_list"}>
                        {submitList.map((props, fdex) => {
                            return (
                                <div key={fdex} className={"search_box_container_card_body_list_li"}>
                                    <select className={"search_box_container_card_body_list_relation"}>
                                        <option>与</option>
                                        <option>或</option>
                                    </select>
                                    <select className={"search_box_container_card_body_list_type"}>
                                        {checkboxList.map((res, index) => {
                                            return (
                                                <option key={index}>{res?.title}</option>
                                            )
                                        })}
                                    </select>
                                    <input className={"search_box_container_card_body_list_input"}
                                           value={props.keyword}
                                           onChange={(ta) => {
                                               const arr = submitList.map(res => {
                                                   return {...res, keyword: ta.target.value}
                                               })
                                               setSubmitList(arr)
                                           }}
                                           placeholder={"输入检索关键字"}></input>
                                    <select className={"search_box_container_card_body_list_must"}>
                                        <option>模糊</option>
                                        <option>精准</option>
                                    </select>
                                    <div className={"search_box_container_card_body_list_new"}
                                         onClick={() => pushSubmitObjToArray(submitList, setSubmitList)}>新增
                                    </div>
                                    <div className={"search_box_container_card_body_list_sub"}>删除</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"search_box_container_card_body_submit_group"}>
                        <div className={"search_box_container_card_body_submit_reset"}>
                            <div className={"search_box_container_card_body_submit_reset_icon"}></div>
                            <div className={"search_box_container_card_body_submit_reset_title"}></div>
                        </div>
                        <div className={"search_box_container_card_body_submit_search"}>
                            <div className={"search_box_container_card_body_submit_search_icon"}></div>
                            <div className={"search_box_container_card_body_submit_search_title"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
