import React from "react";
import {Navigate} from "react-router-dom";

export class ProtectedRoute extends React.Component {
    render() {
        return (
            <>
                <Navigate to={"/login"}/>
            </>
        )
    }
}
