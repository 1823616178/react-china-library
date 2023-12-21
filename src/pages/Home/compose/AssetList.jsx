import '../style/AssetsList.scss'
import {useState} from "react";
import {useNavigate} from "react-router";

export function AssetList() {
    const router = useNavigate()
    const [assetsList] = useState([
        {
            title: "文献",
            content: "汇集国家图书馆馆藏的民国时期地方文献，包括区域志（通志、省志、州志、县志）、各类专业志和地方资料，提供图文对照阅览功能并融汇人物、机构、事件、地名、物产知识数据，支持便捷检索和知识关联功能，便于读者全面利用地方文献资料",
            url: "/literature"
        },
        {
            title: "篇章",
            content: "对民国时期地方文献不同类型、不同层级的篇章资源进行独立标引和聚类揭示，帮助读者从文献结构的维度进行浏览、检索和知识学习。",
            url: "/literature"
        },
        {
            title: "图表",
            content: "集中揭示民国时期地方文献包含的舆图、照片、统计表、题词各种图片与表格，提供图表的出处溯源、内容标引与知识链接，帮助读者利用图表资源快速直观地进行历史风貌、统计数据等主题研究。",
            url: "/chart"
        },
        {
            title: "知识",
            content: "基于民国时期地方文献及其蕴涵的丰富知识内容，挖掘人物、机构、事件、地名、物产等信息，经深度标引形成知识数据并进行立体化揭示，支持读者开展知识内容的文献溯源、关联发现以及图谱分析。",
            url: "/knowledge"
        }
    ])

    return (
        <div className={"home_assets_type"}>
            <div className={"home_assets_type_title"}></div>
            <div className={"home_assets_type_list"}>
                {assetsList.map((item, index) => (
                    <div key={index} className={"home_assets_type_list_li"}>
                        <div className={"home_assets_type_list_li_title"}>{item.title}</div>
                        <div className={"home_assets_type_list_li_info"}>{item.content}</div>
                        <div className={"home_assets_type_list_li_button"}
                             onClick={() => {
                                 router(item.url)
                             }}>查看更多
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
