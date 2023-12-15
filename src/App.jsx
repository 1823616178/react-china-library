import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomeLayout} from "@/layout/HomeLayout";
import {Home} from "@/pages/Home/index.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}




