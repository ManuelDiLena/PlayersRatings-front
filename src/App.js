import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';
import { Button, MenuItem, TextField, Typography } from '@mui/material';

function App(props) {

    const [players, setPlayers] = useState(props.players)

    const initialForm = {
        playerName: '',
        nation: '',
        position: '',
        team: '',
        rating: '',
    }

    const [form, setForm] = useState(initialForm)

    // Controller that captures all form values to create new players
    const addPlayer = (e) => {
        e.preventDefault()
        const playerObject = {
            playerName: form.playerName,
            nation: form.nation,
            position: form.position,
            team: form.team,
            rating: form.rating,
            id: players.length + 1,
        }

        setPlayers(players.concat(playerObject))
        setForm(initialForm)
    }

    // Controller to handle changes in each input
    const handleInputForm = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

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
                    <Button variant='contained' type='submit'>Add Player</Button>
                </form>
            </div>
        </div>
    );
}

export default App;
