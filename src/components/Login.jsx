import { Box, Button, Container, CssBaseline, TextField } from '@mui/material';
import * as React from 'react';

export default function Login({ username, password, handleUsername, handlePassword, handleLogin, loginVisible }) {
    return (
        <Container component='main' sx={{ width: 1, display: 'flex', justifyContent: 'center' }}>
            <CssBaseline />
            <Box sx={{
                width: '75%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <TextField 
                    margin='normal'
                    required
                    id='username'
                    label='Username'
                    name='username'
                    value={username}
                    autoFocus
                    onChange={(e) => handleUsername(e.target.value)}
                />
                <TextField 
                    margin='normal'
                    required
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => handlePassword(e.target.value)}
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
                <Button
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => loginVisible(false)}
                >
                    Cancel
                </Button>
            </Box>
        </Container>
    );
}