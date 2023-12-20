import {HomeBanner} from "@/composent/header/Banner.jsx";
import headerTitle from "@/assets/img/home/home_banner_title.png";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import React, {useState} from "react";
import {KnowledgeListBody} from "@/pages/knowledge/compose/KnowledgeListBody.jsx";

export const KnowledgeIndex = () => {
    const [checkBoxShow, changeCheckbox] = useState(false)

    return (
        <div className={"knowledge_container"}>
            <HomeBanner
                headerTitle={headerTitle}
                changeCheckbox={changeCheckbox}/>
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
            <KnowledgeListBody></KnowledgeListBody>
        </div>

    )
}
