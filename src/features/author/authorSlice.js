import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading:false,
    authors:[],
    error:''
}

// get data
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
   return axios.get("http://localhost:3004/authors")
    .then((response) => response.data)
})


// create slice
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        adduser:(state,action) => {
            state.authors.push(action.payload)
        },
        updateuser:(state,action) => {

        },
        deleteuser:(state,action) => {
            state.authors.filter(item => item.id !== action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false
            state.authors = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false
            state.authors = []
            state.error = action.error.message
        })
    }
})

export const { adduser, updateuser, deleteuser } = userSlice.actions
export default userSlice.reducer