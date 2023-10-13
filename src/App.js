import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import playersService from './services/players';
import loginService from './services/login';
import Login from './components/Login';

function App() {

    const [players, setPlayers] = useState([])

    const initialForm = {
        playerName: '',
        nation: '',
        position: '',
        team: '',
        rating: '',
    }

    const [form, setForm] = useState(initialForm)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    // Function that gets players from the server when starting the app
    useEffect(() => {
        playersService
            .getPlayers()
            .then(initialPlayers => {
                setPlayers(initialPlayers)
            })
    }, [])

    // Controller to capture changes to the login form
    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            const user = await loginService.login({
                username, password,
            })
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (ex) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    // Controller to create new players
    const addPlayer = (e) => {
        e.preventDefault()
        const playerObject = {
            id: players.length + 1,
            playerName: form.playerName,
            nation: form.nation,
            position: form.position,
            team: form.team,
            rating: form.rating,
        }

        playersService
            .createPlayer(playerObject)
            .then(returnedPlayer => {
                setPlayers(players.concat(returnedPlayer))
                setForm(initialForm)
            })
    }

    // Controller to capture changes to the form
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

    // Function to render login form
    const loginForm = () => (
        <form onSubmit={handleLogin}>
            <div>
                username
                <input 
                    type='text'
                    value={username}
                    name='username'
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input 
                    type='password'
                    value={password}
                    name='password'
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    )

    return (
        <div className='App'>
            {
                user === null 
                    ? 
                <Login />
                    :
                <>
                <Menu />
                <div className='container'>
                    {/* {
                        user === null 
                            ? loginForm() 
                            : <p>{user.name} logged</p>
                    } */}
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
                </>
            }
        </div>
    );
}

export default App;
