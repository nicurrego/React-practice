import Button from './components/Button';
import './App.css';

function App() {
  const handleClick = () => alert("Clicked!!!")

    return (
    <div className="App">
      <Button onclick={handleClick} label="Click me" />
    </div>
  );
}

export default App;