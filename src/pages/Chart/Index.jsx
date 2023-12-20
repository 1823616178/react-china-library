import './style/index.scss'
import {ArrowSelect} from "@/composent/ArrowSelect/ArrowSelect.jsx";
import {HomeBanner} from "@/composent/header/Banner.jsx";
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";
import {ImageContentIndex} from "@/composent/ImageContentList/Index.jsx";

export const ChartIndex = () => {
    return (
        <div className={"chart_container"}>
            <div className={"chart_container_head"}>
                <HomeBanner></HomeBanner>
            </div>
            <div className={"chart_container_body"}>
                <div className={"chart_container_left"}>
                    <ArrowSelect></ArrowSelect>
                    <ArrowSelect></ArrowSelect>
                </div>
                <div className={"chart_container_rit"}>
                    <ListHeader></ListHeader>
                    <div className={"chart_container_rit_list"}>
                        <ImageContentIndex></ImageContentIndex>
                    </div>
                </div>
            </div>
        </div>
    )
}
