import {useEffect, useState} from "react";
import '../style/index.scss'

export function Navbar() {
    const [navbarList, setNavBarList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setNavBarList(assembleNavList())
    }, []);
    /**
     * Init
     */
    const assembleNavList = () => {
        let arr = []
        arr.push({title: "首页", url: ""})
        arr.push({title: "知识图谱", url: ""})
        arr.push({title: "知识", url: ""})
        arr.push({title: "文献", url: ""})
        arr.push({title: "图表", url: ""})
        arr.push({title: "帮助中心", url: ""})
        return arr
    }


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
                <div className={"nav_login_container"}>
                    <div className={"nav_login_user_line"}></div>
                    <div className={"nav_cont"}>
                        <div className={"nav_login_user_icon"}></div>
                        <div className={"nav_login_user_title"}>Admin</div>
                    </div>

                </div>
            </div>
        </div>
    )
}


