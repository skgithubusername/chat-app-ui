import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Chat from './components/Chat';
import MessageInput from './components/MessageInput';
import { Box, Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          backgroundColor: '#EAEDED',
          padding: 0,
         
        }}
      >
        <Box
          sx={{
            backgroundColor: '#075E54',
            padding: 2,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <Typography variant="h6">WhatsApp Chat Clone</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Chat />
        </Box>
        <MessageInput />
      </Container>
    </Provider>
  );
};

export default App;
