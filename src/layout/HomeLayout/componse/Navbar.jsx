import {useEffect, useState} from "react";
import '../style/index.scss'

export function Navbar() {
    const [navbarList, setNavBarList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        assembleNavList()
    });
    /**
     * Init
     */
    const assembleNavList = () => {
        let arr = []
        arr.push(
            {title: "首页", url: ""},
        )
        arr.push({title: "知识图谱", url: ""})
        arr.push({title: "知识", url: ""})
        arr.push({title: "文献", url: ""})
        arr.push({title: "图表", url: ""})
        arr.push({title: "帮助中心", url: ""})
        setNavBarList(arr)
    }


    if (isLoading) {
        return <div>loading...</div>
    } else {
        return (
            <div>
                <div className={"navbar_container"}>
                    <div className={"navbar_logo"}></div>
                    <div className={"nav_list"}>
                        {navbarList.map((res, index) => {
                            return <div className={"nav_list_li"} key={index}>
                                <div className={"nav_list_title"}>{res.title}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


