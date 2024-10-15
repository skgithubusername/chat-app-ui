import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';
import { receiveMessage } from '../redux/chatSlice';

const Chat = () => {
  const { messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Simulate receiving a message after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        receiveMessage({
          userId: 2, // Mock different user id
          content: 'Hello, how can I help you?',
          timestamp: new Date().toLocaleTimeString(),
        })
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Box
      sx={{
        height: '70vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        backgroundColor: '#EAEDED',
      }}
    >
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: msg.userId === 1 ? 'flex-end' : 'flex-start',
            marginBottom: 1,
          }}
        >
          <Paper
            sx={{
              padding: '10px 15px',
              backgroundColor: msg.userId === 1 ? '#DCF8C6' : '#FFFFFF',
              borderRadius: msg.userId === 1
                ? '20px 20px 0 20px'
                : '20px 20px 20px 0',
              maxWidth: '70%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
              {msg.content}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: msg.userId === 1 ? 'right' : 'left',
                color: '#999',
                marginTop: 0.5,
              }}
            >
              {msg.timestamp}
            </Typography>
          </Paper>
        </Box>
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default Chat;
