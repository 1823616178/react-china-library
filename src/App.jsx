import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomeLayout} from "@/layout/HomeLayout";
import {Home} from "@/pages/Home/index.jsx";
import {LiteratureIndex} from "@/pages/literature/Index.jsx";
import {LiteratureArticleDetail} from "@/pages/literature/ArticleDetail.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/literature' element={<LiteratureIndex></LiteratureIndex>}></Route>
                    <Route path='/article' element={<LiteratureArticleDetail></LiteratureArticleDetail>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}




