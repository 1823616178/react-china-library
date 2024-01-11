import '@/composent/ArrowSelect/style/index.scss'
import {useContext, useState} from "react";

export const ArrowSelect = ({children = [], title, categoryGatherList}) => {
    // const {categoryGatherList, setCategoryGatherList} = useContext(navTools);
    return (
        <div className={"Literature_container_left_fenlei"}>
            <div className={"Literature_container_left_fenlei_head"}>
                <div className={"Literature_container_left_fenlei_head_title"}>{title}</div>
                <div className={"Literature_container_left_fenlei_head_icon"}></div>
            </div>
            <div className={"Literature_container_left_fenlei_body"}>
                {children.map((item, index) => {
                    return <div key={index} className={"Literature_container_left_fenlei_body_li"}
                                onClick={() => {
                                    if (categoryGatherList[0].indexOf(item.rid) === -1) {
                                        categoryGatherList[1]([...categoryGatherList[0], item.rid])
                                    } else {
                                        const arr = categoryGatherList[0].filter(res => res !== item.rid)
                                        categoryGatherList[1]([...arr])
                                    }
                                }}>
                        <div className={'Literature_container_left_fenlei_body_li_head'}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>
                                {item?.classificationCode} {item?.classificationName}
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>({item.contentNum})</div>
                        </div>
                        {categoryGatherList[0].indexOf(item.rid) > -1 ? ArrowListChildren(item?.children || []) : null}
                    </div>
                })}
            </div>
        </div>
    )
}
/**
 * 子组件递归
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ArrowListChildren = (props = []) => {
    return <div className={"Literature_container_left_fenlei_body_li_body"}>
        {props.map((item, index) => {
            return (
                <div key={index} className={"Literature_container_left_fenlei_body_li_body_li"}>
                    <div className={"Literature_container_left_fenlei_body_li_body_li_icon"}></div>
                    <div
                        className={"Literature_container_left_fenlei_body_li_body_li_title"}>{item.classificationCode || ""} {item.classificationName || ""}</div>
                    <div className={"Literature_container_left_fenlei_body_li_body_li_num"}>({item.contentNum || 0})
                    </div>
                </div>
            )
        })}
    </div>
}
