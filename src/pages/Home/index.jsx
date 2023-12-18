import React, {useState} from 'react'
import './style/index.scss'
import {HomeBanner} from "@/pages/Home/compose/Banner.jsx";
import {HomeBody} from "@/pages/Home/compose/HomeBody.jsx";
import {SearchBox} from "@/pages/Home/compose/SearchBox.jsx";
import {FALSE} from "sass";

export function Home() {
    const [checkBoxShow, changeCheckbox] = useState(false)
    return (
        <div className={"home_container"}>
            <HomeBanner changeCheckbox={changeCheckbox}/>
            <HomeBody />
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
        </div>
    )
}


