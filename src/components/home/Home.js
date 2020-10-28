import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Slack</h1>
            <p className="home__header">
                Select any existing channel to start chatting or create a new channel <span role="img" aria-label="amazed">🤩</span>
            </p>
        </div>
    )
}

export default Home;
