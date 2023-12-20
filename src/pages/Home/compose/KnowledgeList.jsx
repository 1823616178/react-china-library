import '../style/Knowledge.scss'
import {useEffect, useState} from "react";
import {listByViewsOrder} from "@/api/home.js";
import activeButtonImage from '@/assets/img/home/know_button.png'

export function KnowledgeList() {
    const [knowDetailCardList, setKnowDetailCardList] = useState(Array(10).fill(undefined, undefined, undefined))
    const knowButtonList = [
        {title: "人物", key: 0},
        {title: "机构", key: 1},
        {title: "事件", key: 2},
        {title: "地名", key: 3},
        {title: "物产", key: 4},
    ]
    const [knowRadio, setKnowRadio] = useState(0)
    const [knowButtonGroup] = useState(knowButtonList)
    const [tagIndex, setTagIndex] = useState(0)
    let knowDetailQuery = {
        page: 1,
        rows: 8,
        type: 1,
        index: 0
    }
    const [{data: OrderList, loading, error}, refetch] = listByViewsOrder(knowDetailQuery)

    useEffect(() => {
        setKnowDetailCardList(OrderList ? OrderList?.data?.rows : [])
    }, [OrderList]);

    return (
        <>
            <div className={"home_body_knowledge_title"}></div>
            <div className={"home_body_knowledge_head"}>
                <div className={"home_body_knowledge_button_group"}>
                    {knowButtonGroup.map((res, index) => {
                        return (
                            <div className={"home_body_knowledge_button"}
                                 style={tagIndex === res.key ? {backgroundImage: `url(${activeButtonImage})`} : {}}
                                 onClick={() => {
                                     setTagIndex(res.key)
                                 }} key={index}>{res.title}</div>
                        )
                    })}
                </div>
                <div className={"home_body_knowledge_head_radio_group"}>
                    <label>
                        <input type={"radio"} value={1} checked={knowRadio === 1}
                               onClick={() => {
                                   setKnowRadio(1)
                               }}
                               className={"home_body_knowledge_head_radio"}></input>
                        <span>按浏览量排列</span>
                    </label>
                    <label>
                        <input type={"radio"} value={2} checked={knowRadio === 2}
                               onClick={() => {
                                   setKnowRadio(2)
                               }}
                               className={"home_body_knowledge_head_radio"}></input>
                        <span>
                            按关联知识量排列
                        </span>
                    </label>
                </div>
            </div>
            <div className={"home_body_knowledge_box"}>
                {knowDetailCardList.map((res, index) => {
                    return (
                        <div key={index} className={"home_body_knowledge_box_container"}>
                            <div className={"home_body_knowledge_box_header"}>
                                <div className={"home_body_knowledge_box_header_left"}>
                                    <div className={"home_body_knowledge_box_title"}>杜甫</div>
                                    <div className={"home_body_knowledge_icon"}></div>
                                </div>
                                <div className={"home_body_knowledge_box_header_rit"}>
                                    <div className={"home_body_knowledge_box_header_left_icon"}></div>
                                    <div className={"home_body_knowledge_box_header_left_num"}>1231</div>
                                </div>
                            </div>
                            <div className={"home_body_knowledge_box_info"}>
                                <div className={"home_body_knowledge_box_info_detail"}>
                                    <span>时代</span>唐
                                </div>
                                <div className={"home_body_knowledge_box_info_detail"}>
                                    <span>时代</span>杜甫字子美。唐襄陽人。膳部郞 審言孫。至德乾元間。以拾遺出爲華州
                                    司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                    司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                    司功。屬關輔機。輒棄123123123131313131231231312312312拾遺出爲華州
                                    司功。屬關輔機。輒棄123123123131313131231231312312312
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"home_body_knowledge_next"}>
                <div className={"home_body_knowledge_next_button"}>
                    换一批
                </div>
                <div className={"home_body_knowledge_next_button"}>
                    换一批
                </div>
            </div>
        </>
    )
}
