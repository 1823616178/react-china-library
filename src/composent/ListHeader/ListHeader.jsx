import tabModelList from "@/assets/img/literature/tab_change_mode_list.png";
import './style/index.scss'

export const ListHeader = () => {
    return (
        <div className={"Literature_container_rit_header"}>
            <div className={"Literature_container_rit_header_let"}>
                <div className={"Literature_container_rit_header_let_title"}>检索范围:</div>
                <div className={"Literature_container_rit_header_let_tab"}>
                    <div className={"Literature_container_rit_header_let_tab_title"}>文献</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}></div>
                </div>
            </div>
            <div className={"Literature_container_rit_header_right"}>
                <div className={"Literature_container_rit_header_right_span"}>共找到 6 条结果</div>
                <div className={"Literature_container_rit_header_right_line"}></div>
                <div className={"Literature_container_rit_header_right_change_mode"}>
                    <div className={"Literature_container_rit_header_right_change_mode_icon"}></div>
                    <div className={"Literature_container_rit_header_right_change_mode_icon"}
                         style={{backgroundImage: `url("${tabModelList}")`}}></div>
                </div>
            </div>
        </div>
    )
}
