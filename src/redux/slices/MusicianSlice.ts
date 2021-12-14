import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MusicianState {
    musicians: Musician[]
    status: AsyncStatus
    error: string | null | undefined
}

// Define the initial state using that type
const initialState: MusicianState = {
    musicians: [],
    status: 'idle',
    error: undefined
}

export const fetchAllMusician = createAsyncThunk(
    'musician/fetchAll',
    async () => {
        return await []
    }
)

export const musiciansSlice = createSlice({
    name: 'musicians',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllMusician.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllMusician.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.musicians = action.payload
            })
            .addCase(fetchAllMusician.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default musiciansSlice.reducer