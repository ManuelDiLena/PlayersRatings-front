import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/players'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getPlayers = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const createPlayer = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const res = await axios.post(baseUrl, newObject, config)
    return res.data
}

export default { getPlayers, createPlayer, setToken }