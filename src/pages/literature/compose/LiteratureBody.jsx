import {LiteratureList} from "@/pages/literature/compose/LiteratureList.jsx";
import '../style/index.scss'
import {useState} from "react";
import activeTabImage from '@/assets/img/literature/tab_back.png'

export const LiteratureBody = () => {
    const [ZiYuanIsSelect, setZiYuan] = useState(0)
    const [ziyuanList] = useState([{title: "文献", num: 30}, {title: "篇章", num: 30}])
    const ziyuanStyle = {
        backgroundColor: "#F0E6E1",
        backgroundImage: `url(${activeTabImage})`,
        backgroundRepeat: "no-repeat"
    }
    const fenLeiList = useState([])
    const [fenleiIsSelect, setFenLei] = useState(0)


    return (
        <div className={"Literature_container"}>
            <div className={"Literature_container_left"}>
                <div className={"Literature_container_left_ziyuan"}>
                    <div className={"Literature_container_left_head"}>
                        <div className={"Literature_container_left_head_title"}>资源类型</div>
                    </div>
                    <div className={"Literature_container_left_head_body"}>
                        {ziyuanList.map((res, index) => {
                            return <div
                                onClick={() => {
                                    setZiYuan(index)
                                }}
                                key={index} className={"Literature_container_left_head_body_tab"}
                                style={ZiYuanIsSelect === index ? ziyuanStyle : {}}>
                                <div className={"Literature_container_left_head_body_tab_font"}>
                                    {res.title}
                                </div>
                                <div className={"Literature_container_left_head_body_tab_font_num"}>
                                    ({res.num})
                                </div>
                            </div>
                        })}

                    </div>
                </div>
                <div className={"Literature_container_left_fenlei"}>
                    <div className={"Literature_container_left_fenlei_head"}>
                        <div className={"Literature_container_left_fenlei_head_title"}>分类号</div>
                        <div className={"Literature_container_left_fenlei_head_icon"}></div>
                    </div>
                    <div className={"Literature_container_left_fenlei_body"}>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                    </div>
                </div>
                <div className={"Literature_container_left_fenlei"}>
                    <div className={"Literature_container_left_fenlei_head"}>
                        <div className={"Literature_container_left_fenlei_head_title"}>出版年代</div>
                        <div className={"Literature_container_left_fenlei_head_icon"}></div>
                    </div>
                    <div className={"Literature_container_left_fenlei_body"}>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                        <div className={"Literature_container_left_fenlei_body_li"}>
                            <div className={"Literature_container_left_fenlei_body_li_icon"}></div>
                            <div className={"Literature_container_left_fenlei_body_li_title"}>A
                                马克思主义马克思主义马克思主义马克思主义
                            </div>
                            <div className={"Literature_container_left_fenlei_body_li_num"}>(411)</div>
                        </div>
                    </div>
                </div>
            </div>
            <LiteratureList></LiteratureList>
        </div>
    )
}
