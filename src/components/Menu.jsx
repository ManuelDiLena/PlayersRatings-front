import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Menu({ user }) {

    const menuStyle = {
        color: '#FFFFFF',
        backgroundColor: '#263238'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={menuStyle}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Players Ratings
                </Typography>
                <Button color='inherit'>{user.name}</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}