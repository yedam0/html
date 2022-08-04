import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    const [heart, setHeart] = useState(false)
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <div>
                    <i className='xi-heart'> onClick={() => setHeart(!heart)} style={{ color: heart && 'red' }}</i>
                </div>
                <Footer />
            </header>
        </div>
    );
}

export default App;
