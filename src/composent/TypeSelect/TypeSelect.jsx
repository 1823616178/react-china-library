import './style/index.scss'

export function TypeSelect({typeList = [], title = "暂无标题"}) {
    return (
        <div className={"knowledge_list_container_let_type"}>
            <div className={"knowledge_list_container_let_type_title"}>{title}</div>
            <div className={"knowledge_list_container_let_type_title_body"}>
                {typeList.map((res, index) => {
                    return <div key={index} className={"knowledge_list_container_let_type_title_body_checkbox"}>
                        <label>
                            <input type={"checkbox"}/>
                            <span>{res.title}</span>
                        </label>
                        <div className={"knowledge_list_container_let_type_title_body_checkbox_num"}>(12)</div>
                    </div>
                })}
            </div>
        </div>
    )
}
