import React from 'react'
import './style/index.scss'
import {HomeBanner} from "@/pages/Home/compose/Banner.jsx";

export function Home() {
    return (
        <div className={"home_container"}>
            <HomeBanner/>
        </div>
    )
}


