import '../style/literature.scss'
import tabModelList from '@/assets/img/literature/tab_change_mode_list.png'
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";

export function LiteratureList() {
    return (
        <div className={"Literature_container_rit"}>
            <ListHeader></ListHeader>
            <div className={"Literature_container_rit_body"}>
                <div className={"Literature_container_rit_body_li"}>
                    <div className={"Literature_container_rit_body_li_image"}>
                        <div className={"Literature_container_rit_body_li_image_img"}></div>
                    </div>
                    <div className={"Literature_container_rit_body_li_info"}>
                        <div className={"Literature_container_rit_body_li_info_title"}>
                            <div className={"Literature_container_rit_body_li_info_title_span"}>大中華湖北省地理志</div>
                            <div className={"Literature_container_rit_body_li_info_title_icon"}>
                                <div className={"Literature_container_rit_body_li_info_title_icon_img"}></div>
                                <div className={"Literature_container_rit_body_li_info_title_icon_te"}>收藏</div>
                            </div>
                        </div>
                        <div className={"Literature_container_rit_body_li_info_detail"}>
                            <div className={"Literature_container_rit_body_li_info_detail_tag"}>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_name"}>著者</div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_title"}>林传甲 总纂
                                </div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_line"}></div>
                            </div>
                            <div className={"Literature_container_rit_body_li_info_detail_tag"}>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_name"}>著者</div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_title"}>林传甲 总纂
                                </div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_line"}></div>
                            </div>
                            <div className={"Literature_container_rit_body_li_info_detail_tag"}>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_name"}>著者</div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_title"}>林传甲 总纂
                                </div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_line"}></div>
                            </div>
                        </div>
                        <div className={"Literature_container_rit_body_li_info_detail"}>
                            <div className={"Literature_container_rit_body_li_info_detail_tag"}>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_name"}
                                     style={{verticalAlign: "top"}}
                                >摘要
                                </div>
                                <div className={"Literature_container_rit_body_li_info_detail_tag_title"}
                                     style={{
                                         whiteSpace: 'normal',
                                         verticalAlign: "top"
                                     }}>
                                    <div className={"Literature_container_rit_body_li_info_detail_tag_title_over"}>
                                        林传甲总纂《大中华分省地理志》中之一册，体例同其他各册相同。分5篇，160章。介绍湖北省概况。马庆龙
                                        题书名。文前有名人题词、题诗数篇。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
