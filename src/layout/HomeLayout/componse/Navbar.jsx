import {useEffect, useState} from "react";
import '../style/index.scss'
import {useLocation, useNavigate, useRoutes} from "react-router";
import activeBackImage from '@/assets/img/layout/nav_li_back.png';

export function Navbar() {
    const route = useLocation()
    const [navbarList, setNavBarList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [navTagIndex, setNavTagIndex] = useState(route.pathname)
    const router = useNavigate()
    useEffect(() => {
        setNavBarList(assembleNavList())
    }, []);
    /**
     * Init
     */
    const assembleNavList = () => {
        let arr = []
        arr.push({title: "首页", url: "/"})
        arr.push({title: "知识图谱", url: "/relation_group"})
        arr.push({title: "知识", url: "/knowledge"})
        arr.push({title: "文献", url: "/literature"})
        arr.push({title: "图表", url: "/chart"})
        arr.push({title: "帮助中心", url: "/help"})
        return arr
    }

    const activeNavTagStyle = {
        backgroundImage: `url("${activeBackImage}")`
    }
    const toPage = async (url, index) => {
        await setNavTagIndex(url)
        await router(url)
    }
    return (
        <div>
            <div className={"navbar_container"}>
                <div className={"navbar_logo"} onClick={() => toPage("/", 0)}></div>
                <div className={"nav_list"}>
                    {navbarList.map((res, index) => {
                        return <div className={"nav_list_li"}
                                    style={navTagIndex === res.url ? activeNavTagStyle : {}} key={index}>
                            <div className={"nav_list_title"}
                                 style={navTagIndex === res.url ? {color: "#ffffff"} : {}}
                                 onClick={() => toPage(res.url, index)}>{res.title}</div>
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


