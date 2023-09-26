import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';

function App({ players }) {
    return (
        <div className='App'>
            <Menu />
            <div className='container'> 
                {
                    players.map(player => (
                        <Player key={player.id} player={player} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
