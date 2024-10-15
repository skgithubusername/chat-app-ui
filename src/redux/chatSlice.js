import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],  // Stores chat messages
  user: { id: 1, name: 'John Doe' },  // Current user
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    }
  }
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
