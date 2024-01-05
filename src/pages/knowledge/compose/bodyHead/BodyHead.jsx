import {HomeBanner} from "@/composent/header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import React, {useEffect, useState} from "react";
import {checkboxTypeArray} from "@/pages/knowledge/compose/bodyHead/js/common.js";

export function BodyHead({selectTag, typeList, checkboxActiveArr, setCheckboxActiveArr}) {
    const [checkBoxShow, changeCheckbox] = useState(false)
    const [checkboxArr, setCheckboxArr] = useState([])
    useEffect(() => {
         setCheckboxArr(checkboxTypeArray[typeList[selectTag]?.type])
    }, [selectTag, typeList]);
    return (
        <>
            <HomeBanner
                headerTitle={headerTitle}
                changeCheckbox={changeCheckbox}
                checkboxArr={checkboxArr}
                setCheckboxArr={setCheckboxArr}
                checkboxActiveArr={checkboxActiveArr}
                setCheckboxActiveArr={setCheckboxActiveArr}
            />
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
        </>
    )
}
