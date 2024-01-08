import {HomeBanner} from "../header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "../header/SearchBox.jsx";
import React, {useEffect, useState} from "react";
import {checkboxTypeArray} from "@/pages/knowledge/compose/bodyHead/js/common.js";

export function BodyHead({changeFunction, checkboxArr, setCheckboxArr, keyword, setKeyword}) {
    const [checkBoxShow, changeCheckbox] = useState(false)

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
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
        </>
    )
}
