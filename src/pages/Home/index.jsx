import React from 'react'
import './style/index.scss'
import {HomeBanner} from "@/pages/Home/compose/Banner.jsx";
import {HomeBody} from "@/pages/Home/compose/HomeBody.jsx";

export function Home() {
    return (
        <div className={"home_container"}>
            <HomeBanner/>
            <HomeBody/>
        </div>
    )
}


