import {useEffect, useState} from "react";
import defaultHeaderTitle from '@/assets/img/home/home_banner_title.png'
import {isAction} from "@reduxjs/toolkit";

export function HomeBanner({
                               changeCheckbox,
                               headerTitle = defaultHeaderTitle,
                               checkboxArr = [],
                               setCheckboxArr,
                               changeFunction,
                               keyword,
                               setKeyword
                           }) {

    const [allChecked, setAllChecked] = useState(true)
    /**
     * 全选时
     * @param val
     */
    const onChangeAllChecked = async (val) => {
        await setAllChecked(val.target.checked)
        const newCheckBoxArr = checkboxArr.map((res, i) => {
            return {...res, isActive: val.target.checked}
        })
        await setCheckboxArr(newCheckBoxArr)
    }

    /**
     * 点击修改状态
     * @param index
     * @returns {Promise<void>}
     */
    const handleChange = async (index) => {
        const newCheckboxArr = checkboxArr.map((res, i) => {
            if (i === index) {
                return {...res, isActive: !res.isActive};
            }
            return res;
        });
        await setCheckboxArr(newCheckboxArr);
    };


    /* 为什么这个不能用？
        const handleChangeCopy = (index) => {
            {
                let arr = checkboxArr
                console.log(arr[index].isActive)
                arr[index].isActive = !arr[index].isActive
                setCheckboxArr(arr)
            }
        }*/

    return (
        <div className={"banner_container"}>
            <div className={"banner_container_title"} style={
                {backgroundImage: `url(${headerTitle})`}
            }></div>
            <div className={"banner_container_input"}>
                <div className={"banner_container_search"}>
                    <label>
                        <input value={keyword} placeholder={"请输入检索条件"} onChange={(res) => {
                            setKeyword(res.target.value)
                        }} className={"banner_container_input_in"}/>
                    </label>
                    <div className={"banner_container_input_button"} onClick={changeFunction}>搜索</div>
                    <div className="triangle"></div>
                </div>
                <div className={"banner_container_input_high"} onClick={() => {
                    changeCheckbox(true)
                }}>高级检索
                </div>
            </div>
            <div className={"banner_container_select"}>
                <label>
                    <input type={"checkbox"} checked={allChecked} onChange={onChangeAllChecked} title="全选"
                           className={"banner_container_checkbox"}/>
                    <span>全选</span>
                </label>
                {checkboxArr.map((res, index) => (
                    <label key={index}>
                        <input type={"checkbox"}
                               onChange={() => handleChange(index)}
                               checked={res.isActive}
                               title={res.title} className={"banner_container_checkbox"}/>
                        <span>{res.title}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}
