import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function Player({ player }) {

    const ratingStyle = {
        color: '#4caf50',
    };

    const deleteStyle = {
        color: '#b71c1c',
    }

    const editStyle = {
        color: '#0d47a1',
    }

    const actionsStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    }

    const firstContent = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    return (
        <Card sx={{ width: 250, height: 270, mt: 1.5, mr: 1, ml: 1, backgroundColor: '#eceff1' }}>
            <CardContent style={firstContent}>
                <Typography variant='h6' color='text.secondary'>
                    {player.position}
                </Typography>
                <Typography variant='h4' style={ratingStyle}>
                    {player.rating}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant='h5' component='div'>
                    {player.playerName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {player.nation}
                </Typography>
                <Typography>
                    {player.team}
                </Typography>
            </CardContent>
            <CardActions style={actionsStyle}>
                <Button size='small' style={editStyle}><EditNoteIcon /></Button>
                <Button size='small' style={deleteStyle}><DeleteIcon /></Button>
            </CardActions>
        </Card>
    );

}