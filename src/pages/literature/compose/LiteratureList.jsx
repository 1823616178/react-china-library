import '../style/literature.scss'
import tabModelList from '@/assets/img/literature/tab_change_mode_list.png'
import {ListHeader} from './ListHeader/ListHeader.jsx';
import {ImageContentIndex} from "@/composent/ImageContentList/Index.jsx";

export function LiteratureList() {
    return (
        <div className={"Literature_container_rit"}>
            <ListHeader></ListHeader>
            <div className={"Literature_container_rit_body"}>
                <ImageContentIndex></ImageContentIndex>
            </div>
        </div>
    )
}
