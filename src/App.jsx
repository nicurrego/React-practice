import Button from './components/Button/Button';

import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
      <>
        <Button><p>RED</p></Button>
        <Button blue><p>BLUE</p></Button>
      </>
  )
}

export default App