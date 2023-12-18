import {HomeBanner} from "@/composent/header/Banner.jsx";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import React, {useState} from "react";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {LiteratureBody} from "@/pages/literature/compose/LiteratureBody.jsx";

export function LiteratureIndex() {
    const [checkBoxShow, changeCheckbox] = useState(false)

    return (
        <div className={"literature_container"}>
            <HomeBanner
                headerTitle={headerTitle}
                changeCheckbox={changeCheckbox}/>
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
            <LiteratureBody/>
        </div>
    )
}
