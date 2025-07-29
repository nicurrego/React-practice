import React from 'react';
import './App.css';

interface AppProps {
  appName: string;
}

const App: React.FC<AppProps> = ({ appName }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to {appName}!</h1>
        <p>This is your main application component.</p>
        {/* You can render other components here */}
        {/* <MyComponent /> */}
      </header>
    </div>
  );
};

export default App;