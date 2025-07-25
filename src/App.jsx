import Card from './components/Counter';
import './App.css'
import Counter from './components/Counter';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>!Hola mundo!</h1>
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