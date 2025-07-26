import NameForm from './components/NameForm';
import './App.css'
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>!Hola mundo!</h1>
      <NameForm />
      <ToggleButton />
      <Counter />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default App