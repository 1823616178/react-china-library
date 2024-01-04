import tabModelList from "@/assets/img/literature/tab_change_mode_list.png";
import './style/index.scss'

export const ListHeader = ({
                               buildSelectTag,
                               timerSelectTag,
                               eventSelectTag,
                               orgSelectTag,
                               geoSelectTag,
                               productTag,
                               advanceList = [],
                               setBuildSelectTag,
                               setTimerSelectTag,
                               setEventSelectTag,
                               setOrgSelectTag,
                               setGeoSelectTag,
                               setProductSelectTag,
                               deleteTagFunction
                           }) => {

    /**
     * 删除标签
     */
    const deleteTag = (func) => {
        deleteTagFunction(func)
    }
    return (
        <div className={"Literature_container_rit_header"}>
            <div className={"Literature_container_rit_header_let"}>
                <div className={"Literature_container_rit_header_let_title"}>检索范围:</div>
                {typeof buildSelectTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[0]?.children[buildSelectTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setBuildSelectTag)}></div>
                </div> : null}
                {typeof timerSelectTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[1]?.children[timerSelectTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setTimerSelectTag)}></div>
                </div> : null}
                {typeof eventSelectTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[1]?.children[eventSelectTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setEventSelectTag)}></div>
                </div> : null}
                {typeof orgSelectTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[1]?.children[orgSelectTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setOrgSelectTag)}></div>
                </div> : null}
                {typeof geoSelectTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[1]?.children[geoSelectTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setGeoSelectTag)}></div>
                </div> : null}
                {typeof productTag !== "undefined" ? <div className={"Literature_container_rit_header_let_tab"}>
                    <div
                        className={"Literature_container_rit_header_let_tab_title"}>{`建设单位：` + advanceList[1]?.children[productTag].title}</div>
                    <div className={"Literature_container_rit_header_let_tab_icon"}
                         onClick={() => deleteTag(setProductSelectTag)}></div>
                </div> : null}
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
