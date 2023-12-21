import '../style/Knowledge.scss'
import {useEffect, useState} from "react";
import {listByViewsOrder} from "@/api/home.js";
import activeButtonImage from '@/assets/img/home/know_button.png'
import {diffMoreTypeTitle} from '../js/diffKnowViews.jsx'

export function KnowledgeList() {
    const [knowDetailCardList, setKnowDetailCardList] = useState(Array(10).fill(undefined, undefined, undefined))
    const knowButtonList = [
        {title: "人物", key: 1},
        {title: "机构", key: 2},
        {title: "事件", key: 3},
        {title: "地名", key: 4},
        {title: "物产", key: 5},
    ]
    const [page, setPage] = useState(1)
    const [knowRadio, setKnowRadio] = useState(1)
    const [knowButtonGroup] = useState(knowButtonList)
    const [tagIndex, setTagIndex] = useState(1)
    let knowDetailQuery = {
        page: page,
        rows: 8,
        type: tagIndex,
        index: knowRadio
    }
    const [{data: OrderList, loading, error}, reReqListOrder] = listByViewsOrder(knowDetailQuery)
    useEffect(() => {
        setKnowDetailCardList(OrderList ? OrderList?.data?.rows : [])
    }, [OrderList]);

    useEffect(() => {
        reReqListOrder()
    }, [knowRadio, tagIndex, page]);
    const changeRadioFunc = (index) => {
        setKnowRadio(index)
    }

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
                               onChange={() => {
                                   changeRadioFunc(1)
                               }}
                               className={"home_body_knowledge_head_radio"}></input>
                        <span>按浏览量排序</span>
                    </label>
                    <label>
                        <input type={"radio"} value={2} checked={knowRadio === 2}
                               onChange={() => {
                                   changeRadioFunc(2)
                               }}
                               className={"home_body_knowledge_head_radio"}></input>
                        <span>
                            按推荐排序
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
                                    {diffMoreTypeTitle(res, tagIndex)}
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
                <div className={"home_body_knowledge_next_button"} onClick={() => {
                    setPage(page + 1)
                }}>
                    换一批
                </div>
                <div className={"home_body_knowledge_next_button"}>
                    查看更多
                </div>
            </div>
        </>
    )


}
