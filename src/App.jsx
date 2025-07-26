import CounterWithEffect from './components/CounterWithEffect';
import NameForm from './components/NameForm';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';

import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
      <>
        <section>
          <h1>!Hola mundo!</h1>
        <CounterWithEffect />
          <NameForm />
          <ToggleButton />
          <Counter />
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </>
  )
}

export default App