import {HomeBanner} from "../header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "../header/SearchBox.jsx";
import React, {useEffect, useState} from "react";
import {checkboxTypeArray} from "@/pages/knowledge/compose/bodyHead/js/common.js";

export function BodyHead({
                             selectTag,
                             highSearch,
                             checkBoxShow,
                             typeList,
                             changeFunction,
                             checkboxArr,
                             submitList,
                             setSubmitList,
                             setCheckboxArr,
                             keyword,
                             changeCheckbox,
                             setKeyword
                         }) {
    const [selectType, setSelectType] = useState(undefined)
    useEffect(() => {
        if (typeList) {
            if (typeof typeList && typeof selectTag !== "undefined") setSelectType(typeList[selectTag]?.type)
        }
    }, [selectTag, typeList]);
    return (
        <>
            <HomeBanner
                keyword={keyword}
                changeFunction={changeFunction}
                changeCheckbox={changeCheckbox}
                checkboxArr={checkboxArr}
                setCheckboxArr={setCheckboxArr}
                setKeyword={setKeyword}
            />
            {
                checkBoxShow ? <SearchBox
                    type={selectType}
                    submitList={submitList}
                    setSubmitList={setSubmitList}
                    highSearch={highSearch}
                    changeCheckbox={changeCheckbox}/> : <></>
            }
        </>
    )
}
