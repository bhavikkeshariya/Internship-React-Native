import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const {data} = await axios.get('https://www.freetogame.com/api/games');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = true;
      });
  },
});
export default userSlice.reducer;
