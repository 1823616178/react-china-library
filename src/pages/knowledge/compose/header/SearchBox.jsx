import '@/assets/style/SearchBox.scss'
import {useEffect, useRef, useState} from "react";
import {checkboxType} from "@/pages/knowledge/compose/header/js/data.js";
import {
    changeValue,
    deleteSubmitForm,
    pushSubmitObjToArray
} from "@/pages/knowledge/compose/header/js/searchBoxUtils.js";

export function SearchBox({changeCheckbox, type}) {
    const [checkboxList, setCheckboxList] = useState([]) //关键字列表
    const submitObject = {
        field: "sourceName",
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
                                    {fdex !== 0 ? <select className={"search_box_container_card_body_list_relation"}
                                                          onChange={(ta) => changeValue(ta, submitList, setSubmitList, fdex, "relation")}>
                                        <option value={"must"}>与</option>
                                        <option value={"should"}>或</option>
                                    </select> : <div className={"search_box_container_card_body_list_relation"}
                                                     style={{border: "none"}}></div>}
                                    <select className={"search_box_container_card_body_list_type"}>
                                        {checkboxList.map((res, index) => {
                                            return (
                                                <option key={index}>{res?.title}</option>
                                            )
                                        })}
                                    </select>
                                    <input className={"search_box_container_card_body_list_input"}
                                           value={props.keyword}
                                           onChange={(ta) => changeValue(ta, submitList, setSubmitList, fdex, "keyword")}
                                           placeholder={"输入检索关键字"}></input>
                                    <select className={"search_box_container_card_body_list_must"}
                                            onChange={(ta) => changeValue(ta, submitList, setSubmitList, fdex, "match")}>
                                        <option value={"fuzzy"}>模糊</option>
                                        <option value={"term"}>精准</option>
                                    </select>
                                    <div className={"search_box_container_card_body_list_new"}
                                         onClick={() => pushSubmitObjToArray(submitList, setSubmitList)}>新增
                                    </div>
                                    {fdex !== 0 ? <div className={"search_box_container_card_body_list_sub"}
                                                       onClick={() => deleteSubmitForm(submitList, setSubmitList, fdex)}>删除
                                    </div> : <div className={"search_box_container_card_body_list_new"}
                                                  style={{backgroundColor: "unset", cursor: 'default'}}></div>}
                                </div>
                            )
                        })}
                    </div>
                    <div className={"search_box_container_card_body_submit_group"}>
                        <div className={"search_box_container_card_body_submit_reset"}>

                        </div>
                        <div className={"search_box_container_card_body_submit_search"}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
