import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';
import playersService from './services/players';
import loginService from './services/login';
import Login from './components/Login';
import PlayerForm from './components/PlayerForm';

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
    const [loginVisible, setLoginVisible] = useState(false)

    // Function that gets players from the server when starting the app
    useEffect(() => {
        playersService
            .getPlayers()
            .then(initialPlayers => {
                setPlayers(initialPlayers)
            })
    }, [])

    // Function to get user data from localStorage
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedPlayersAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            playersService.setToken(user.token)
        }
    }, [])

    // Controller to capture changes to the login form
    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            const user = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedPlayersAppUser', JSON.stringify(user)
            )

            playersService.setToken(user.token)
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

    // Function to show login form
    const loginForm = () => {
        const showLogin = { display: loginVisible ? '' : 'none' }

        return (
            <div style={showLogin}>
                <Login 
                    username={username} 
                    password={password} 
                    handleUsername={setUsername} 
                    handlePassword={setPassword} 
                    handleLogin={handleLogin} 
                    loginVisible={setLoginVisible}
                />
            </div>
        )
    }

    return (
        <div className='App'>
                <Menu user={user} loginVisible={setLoginVisible} />
                {   user === null && loginForm() }
                <div className='container'>
                    <div className='players'>
                        {
                            players.map(player => (
                                <Player key={player.id} player={player} />
                            ))
                        }
                    </div> 
                    {
                        user !== null 
                        && 
                        <PlayerForm 
                            addPlayer={addPlayer}
                            form={form}
                            handleInputForm={handleInputForm}
                            positions={positions}
                        />
                    }
                </div>
        </div>
    );
}

export default App;
