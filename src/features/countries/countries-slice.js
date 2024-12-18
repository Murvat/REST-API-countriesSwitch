import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadCountries = createAsyncThunk(
    '@@countries/load-countries',
    async(_, {
        extra: {client, api}
    }) => {
        return client.get(api.ALL_COUNTRIES)
    }
)

const initialState = {
    status: 'idle',
    error: null,
    list:[]
}

const countriesSlice = createSlice({
    name: '@@countries',
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state, action) => {
                state.status = 'loading';
                state.error = null
        })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status='received'
                state.list = action.payload.data;
        })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload
        })
    }
});

export const countryReducer = countriesSlice.reducer;

export const selectCountries = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
        qty: state.countries.list.length,

})


export const selectAllCountries = (state) => state.countries.list;

//selectors
export const selectVisibleCountries = (state, { search = '',region='' }) => {
    return state.countries.list.filter(
        country => (
            country.name.toLowerCase().includes(search.toLocaleLowerCase()) && country.region.includes(region)
        )
    )

}

