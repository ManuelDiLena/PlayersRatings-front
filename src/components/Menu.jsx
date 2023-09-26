import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {

    const menuStyle = {
        color: '#FFFFFF',
        backgroundColor: '#607d8b'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar style={menuStyle}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Players Ratings
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}