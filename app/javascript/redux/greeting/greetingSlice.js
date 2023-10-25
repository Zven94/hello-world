import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const options = { method: 'GET' };
  const response = await fetch('http://127.0.0.1:3000/api/random_greeting/', options);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch greetings');
  }
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
      });
  },
});

export default greetingSlice.reducer;