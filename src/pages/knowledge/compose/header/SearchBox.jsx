import '@/assets/style/SearchBox.scss'
import {useRef, useState} from "react";

export function SearchBox(props) {
    const radioGroup = [
        {title: "文献", value: ""},
        {title: "篇章", value: ""},
        {title: "图表", value: ""},
        {title: "知识", value: ""}
    ]
    const [radioType] = useState(radioGroup)
    const layerRef = useRef(null)
    const closeFunc = (event) => {
        if (event.target.className === 'search_box_container') {
            props.changeCheckbox(false)
        }
    }
    return (
        <div className={"search_box_container"} ref={layerRef} onClick={(event) => {
            closeFunc(event)
        }}>
            <div className={"search_box_container_card"}>
                <div className={"search_box_container_card_head"}>
                    <div className={"search_box_container_card_head_title"}>高级检索</div>
                    <div className={"search_box_container_card_head_close"} onClick={() => {
                        props.changeCheckbox(false)
                    }}></div>
                </div>
                <div className={"search_box_container_card_body"}>
                    <div className={"search_box_container_card_body_list"}>
                        <div className={"search_box_container_card_body_list_li"}>
                            <select className={"search_box_container_card_body_list_relation"}>
                                <option>默</option>
                                <option>默</option>
                            </select>
                            <select className={"search_box_container_card_body_list_type"}>
                                <option>默认第一</option>
                                <option>默认第一</option>
                            </select>
                            <input className={"search_box_container_card_body_list_input"}></input>
                            <select className={"search_box_container_card_body_list_must"}>
                                <option>默认</option>
                                <option>默认</option>
                            </select>
                            <div className={"search_box_container_card_body_list_new"}>新增</div>
                            <div className={"search_box_container_card_body_list_sub"}>删除</div>
                        </div>
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
