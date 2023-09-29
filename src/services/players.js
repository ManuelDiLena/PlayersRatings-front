import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/players'

const getPlayers = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const createPlayer = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

export default { getPlayers, createPlayer }