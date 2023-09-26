import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';
import { Button, MenuItem, TextField, Typography } from '@mui/material';

function App(props) {

    const [players, setPlayers] = useState(props.players)

    // Object to show positions in the form select
    const positions = [
        {
          value: 'GK',
          label: 'GK',
        },
        {
          value: 'CB',
          label: 'CB',
        },
        {
          value: 'RB',
          label: 'RB',
        },
        {
          value: 'LB',
          label: 'LB',
        },
        {
          value: 'CDM',
          label: 'CDM',
        },
        {
          value: 'CM',
          label: 'CM',
        },
        {
          value: 'CAM',
          label: 'CAM',
        },
        {
          value: 'RW',
          label: 'RW',
        },
        {
          value: 'LW',
          label: 'LW',
        },
        {
          value: 'CF',
          label: 'CF',
        },
        {
          value: 'ST',
          label: 'ST',
        },
      ];

    return (
        <div className='App'>
            <Menu />
            <div className='container'>
                <div className='players'>
                    {
                        players.map(player => (
                            <Player key={player.id} player={player} />
                        ))
                    }
                </div> 
                <form className='form'>
                    <Typography variant='h5' sx={{ mb: 1.5 }}>
                        New Player
                    </Typography>
                    <TextField
                        label='Name'
                        id='outlined-name'
                        size='small'
                    />
                    <TextField
                        label='Nation'
                        id='outlined-nation'
                        size='small'
                    />
                    <TextField
                        id='outlined-position'
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
                        id='outlined-team'
                        size='small'
                    />
                    <TextField
                        label='Rating'
                        id='outlined-rating'
                        size='small'
                    />
                    <Button variant="contained">Add Player</Button>
                </form>
            </div>
        </div>
    );
}

export default App;
