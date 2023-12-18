import '../style/index.scss'

export function Footer() {
    return (
        <div className={"home_footer_container"}>
            <div className={"home_footer_container_box"}>
                <div className={"home_footer_container_logo"}>
                    <div className={"home_footer_container_logo_img"}></div>
                    <div className={"home_footer_container_logo_title"}>©中国国家图书馆版权所有</div>
                </div>
                <div className={"home_footer_container_tel"}>
                    <div className={"home_footer_container_phone"}>(+86 10) 88545426    (+86 10) 88545360</div>
                    <div className={"home_footer_container_tel_nav"}>
                        <div className={"home_footer_container_tel_nav_li"}>关于我们</div>
                        <div className={"home_footer_container_tel_nav_li"}>关于我们</div>
                        <div className={"home_footer_container_tel_nav_li"}>关于我们</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
