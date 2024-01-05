import {useEffect, useState} from "react";
import defaultHeaderTitle from '@/assets/img/home/home_banner_title.png'

export function HomeBanner({
                               changeCheckbox,
                               headerTitle = defaultHeaderTitle,
                               checkboxArr = [],
                               setCheckboxArr,
                               checkboxActiveArr,
                               setCheckboxActiveArr
                           }) {

    const [allChecked, setAllChecked] = useState(true)
    const onChangeAllChecked = (val) => {
        setAllChecked(val.target.checked)
    }

    const handleChange = (index) => {
        const newCheckboxArr = checkboxArr.map((res, i) => {
            if (i === index) {
                return {...res, isActive: !res.isActive};
            }
            return res;
        });
        setCheckboxArr(newCheckboxArr);
    };

    const handleChangeCopy = (index) => {
        {
            let arr = checkboxArr
            console.log(arr[index].isActive)
            arr[index].isActive = !arr[index].isActive
            setCheckboxArr(arr)
        }
    }

    return (
        <div className={"banner_container"}>
            <div className={"banner_container_title"} style={
                {backgroundImage: `url(${headerTitle})`}
            }></div>
            <div className={"banner_container_input"}>
                <div className={"banner_container_search"}>
                    <label>
                        <input className={"banner_container_input_in"}/>
                    </label>
                    <div className={"banner_container_input_button"}>搜索</div>
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
                               onClick={() => handleChange(index)}
                               checked={res.isActive}
                               title={res.title} className={"banner_container_checkbox"}/>
                        <span>{res.title}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}
