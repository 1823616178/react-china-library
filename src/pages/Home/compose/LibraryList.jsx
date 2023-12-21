import {useEffect, useState} from "react";
import {selectBookTempOrderByViews} from "@/api/home.js";
import {useNavigate} from "react-router";

export const LibraryList = () => {
    const [knowViewCardList, setKnowViewCardList] = useState([])
    const [transform, setTransform] = useState(0)
    const query = {
        page: 1,
        rows: 9
    }
    const baseURL = import.meta.env.VITE_APP_IMAGE_VIEW_URL
    const [{data: selectBookList, loading, error}, refetch] = selectBookTempOrderByViews(query)
    useEffect(() => {
        setKnowViewCardList(selectBookList?.data.rows || [])
    }, [selectBookList])
    const router = useNavigate()
    return (
        <div className={"home_body_wenxian"}>
            <div className={"home_body_wenxian_title"}></div>
            <div className={"home_body_wenxian_body"}>
                <div className={"home_body_wenxian_body_arrow"}
                     onClick={() => {
                         setTransform(transform < 0 ? transform + 1122 : transform)
                     }}
                     style={{marginRight: "83px"}}></div>
                <div className={"home_body_wenxian_body_list"}>
                    {knowViewCardList.map((res, index) => {
                        return <div key={index} className={"home_body_wenxian_body_list_view"}
                                    style={{transform: `translateX(${transform}px)`}}>
                            <div className={"home_body_wenxian_body_list_view_image"}
                                 style={{backgroundImage: `url(${baseURL + res.filePath})`}}></div>
                            <div className={"home_body_wenxian_body_list_view_title"}>{res.title || ""}</div>
                            <div className={"home_body_wenxian_body_list_view_user"}>{res.author || "不详"}</div>
                            <div
                                className={"home_body_wenxian_body_list_view_user"}>建设单位：{res.constructionUnits || "不详"}</div>
                            <div className={"home_body_wenxian_body_list_view_date"}>
                                <div
                                    className={"home_body_wenxian_body_list_view_date_text"}>出版时间：{res.publishDate || ""}</div>
                                {/* <div className={"home_body_wenxian_body_list_view_date_pre"}>
                                    <div className={"home_body_wenxian_body_list_view_date_pre_image"}></div>
                                    <div className={"home_body_wenxian_body_list_view_date_pre_title"}>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    })}
                </div>
                <div className={"home_body_wenxian_body_arrow"} style={{
                    transform: "rotate(180deg)",
                    marginLeft: "83px"
                }}
                     onClick={() => {
                         setTransform(transform > (-1122 * 2) ? transform - 1122 : transform)
                     }}
                ></div>
            </div>
            <div className={"home_body_wenxian_more_body"}
                 onClick={() => {
                     router('/literature')
                 }}>
                查看更多
            </div>
        </div>
    )
}
