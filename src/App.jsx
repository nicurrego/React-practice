import Card from './components/Card';
import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>!Hola mundo!</h1>
      <Card title="Título de la tarjeta 1" description="Cuerpo de la tarjeta 1" />
      <Card title="Título de la tarjeta 2" description="Cuerpo de la tarjeta 2" />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default App