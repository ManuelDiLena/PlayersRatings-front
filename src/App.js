import './App.css';
import Menu from './components/Menu';

function App(props) {

    const { players } = props

    return (
        <div className='App'>
            <Menu />
            <div className='container'>
                <ul>
                    {
                        players.map(player => (
                            <li key={player.id}>{player.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;
