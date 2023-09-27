import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// POSITIONS: GK, CB, RB, LB, CDM, CM, CAM, RW, LW, CF, ST

const players = [
    {
        id: 1,
        playerName: 'Lionel Messi',
        nation: 'Argentina',
        team: 'Inter Miami (CAL)',
        position: 'RW',
        rating: 99,
    },
    {
        id: 2,
        playerName: 'Cristiano Ronaldo',
        nation: 'Portugal',
        team: 'Al Nassr (ARA)',
        position: 'ST',
        rating: 95,
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App players={players} />
  </React.StrictMode>
);


