import Button from './components/Button';
import Counter from './components/Counter';
import './App.css';

function greet(name: string): string{
  return `Hello ${name}`;
}

function App() {
  const handleClick = () => alert("Clicked!!!")
  console.log(greet("World"));

    return (
    <div className="App">
      <Button onclick={handleClick} label="Click me" />
      <Counter />
    </div>
  );
}

export default App;