import react from "react";
import {Outlet} from "react-router";
import {Navbar} from "@/layout/HomeLayout/componse/Navbar.jsx";

export class HomeLayout extends react.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <Outlet/>
            </>
        )
    }
}
