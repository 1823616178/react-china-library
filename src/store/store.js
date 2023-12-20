import {configureStore} from "@reduxjs/toolkit";
import {appSlicer} from "@/store/module";

export default configureStore({
    reducer: {
        app: appSlicer.reducer
    }
})


