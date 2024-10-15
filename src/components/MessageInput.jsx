import React, { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material'; // Removed unused Button import
import SendIcon from '@mui/icons-material/Send'; // Ensure this import is available
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          userId: 1, // Mock current user id
          content: message,
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setMessage(''); // Clear the input field
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        padding: '10px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #ddd',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleSend() : null)}
        placeholder="Type a message"
        sx={{
          borderRadius: '25px',
          backgroundColor: '#f0f0f0',
          borderColor: 'transparent',
          '& fieldset': { border: 'none' },
        }}
      />
      <IconButton
        color="primary"
        sx={{
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: '#1aa34a',
          },
        }}
        onClick={handleSend}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
