import '../style/chart.scss'
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";

export function LiteratureChart() {
    return (
        <div className={"literature_chart_container"}>
            <div className={"literature_article_container_know_bar"}>
                <div className={"literature_article_container_know_bar_title"}>相关知识</div>
                <div className={"literature_article_container_know_bar_result"}>共 8 条结果</div>
            </div>
            <div className={"literature_chart_container_list"}>
                <div className={"literature_chart_container_list_let"}>
                    <LeftNavBox></LeftNavBox>
                </div>
                <div className={"literature_chart_container_list_rit"}>
                    <div className={"literature_chart_container_list_rit_li"}>
                        <div className={"literature_chart_container_list_rit_li_image"}></div>
                        <div className={"literature_chart_container_list_rit_li_info"}>
                            <div className={"literature_chart_container_list_rit_li_title"}>南京市區簡圖</div>
                            <div className={"literature_chart_container_list_rit_li_cate"}><span>分类号</span></div>
                            <div className={"literature_chart_container_list_rit_li_chart"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
