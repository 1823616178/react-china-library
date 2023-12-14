import {configureStore} from "@reduxjs/toolkit";
import {counterSlicer} from "@/store/module";

export default configureStore({
    reducer: {
        counter: counterSlicer.reducer
    }
})


