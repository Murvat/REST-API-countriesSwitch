import axios from "axios";
import * as api from './config';

import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from "./features/themes/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details:detailsReducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            }
        },
        serializableCheck:false
    })
})