import react from "react";
import {Outlet} from "react-router";

export class HomeLayout extends react.Component {
    render() {
        return (
            <>
                <Outlet/>
            </>
        )
    }
}
