import {HomeBanner} from "@/composent/header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import React, {useState} from "react";

export function BodyHead() {
    const [checkBoxShow, changeCheckbox] = useState(false)

    return (
        <>
            <HomeBanner
                headerTitle={headerTitle}
                changeCheckbox={changeCheckbox}/>
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
        </>
    )
}
