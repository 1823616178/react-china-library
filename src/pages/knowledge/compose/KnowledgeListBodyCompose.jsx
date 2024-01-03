/*
import {Component} from "react";
import {LeftNavBox} from "@/composent/LeftNavbox/LeftNavBox.jsx";
import {ListHeader} from "@/composent/ListHeader/ListHeader.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";

export class KnowledgeListBodyCompose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTag: [],
            buildSelectTag: [],
            timerSelectTag: [],
            typeList: [],
            advanceList: [],
            knowledgeList: [],
            allEnglishLetter: Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
            letterList: this.state.allEnglishLetter,
            resultList: []
        }
    }

    render() {
        return (
            <div className={"knowledge_list_container"}>
                <div className={"knowledge_list_container_let"}>
                    <LeftNavBox selectTag={selectTag}
                                title={"知识类型"}
                                assetsList={typeList}
                                setTag={setSelectTag}></LeftNavBox>
                    {
                        this.advanceList.map((result, index) => {
                            return (
                                filterNavBox(result, index)
                            )
                        })
                    }

                </div>
                <div className={"knowledge_list_container_rit"}>
                    <ListHeader></ListHeader>
                    <div className={"knowledge_list_container_rit_sort"}>
                        <div className={"knowledge_list_container_rit_sort_title"}>排序筛选：</div>
                        <div className={"knowledge_list_container_rit_sort_all"}>全部</div>
                        <div className={"knowledge_list_container_rit_sort_font_group"}>
                            {letterList.map((res, index) => {
                                return <div className={"knowledge_list_container_rit_sort_font"}
                                            key={index}>{res}</div>
                            })}
                        </div>
                    </div>
                    <div className={"knowledge_list_container_rit_list"}>
                        <KnowledgeList data={knowledgeList} moreHeaderSlot={moreHeaderSlotCompose()}></KnowledgeList>
                    </div>
                </div>
            </div>
        )
    }
}
*/
