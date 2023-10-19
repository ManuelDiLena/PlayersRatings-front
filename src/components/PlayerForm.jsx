import { Button, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'

export default function PlayerForm({ addPlayer, form, handleInputForm, positions }) {
    return (
        <form className='form' onSubmit={addPlayer}>
            <Typography variant='h5' sx={{ mb: 1.5 }}>
                New Player
            </Typography>
            <TextField
                label='Name'
                name='playerName'
                value={form.playerName}
                onChange={handleInputForm}
                id='outlined-name'
                size='small'
            />
            <TextField
                label='Nation'
                name='nation'
                value={form.nation}
                onChange={handleInputForm}
                id='outlined-nation'
                size='small'
            />
            <TextField
                id='outlined-position'
                name='position'
                value={form.position}
                onChange={handleInputForm}
                select
                label='Position'
                size='small'
                helperText='Select player position'
            >
                {positions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label='Team'
                name='team'
                value={form.team}
                onChange={handleInputForm}
                id='outlined-team'
                size='small'
            />
            <TextField
                label='Rating'
                name='rating'
                value={form.rating}
                onChange={handleInputForm}
                id='outlined-rating'
                size='small'
            />
            <Button variant='contained' type='submit'>
                Add Player
            </Button>
        </form>
    );
}

