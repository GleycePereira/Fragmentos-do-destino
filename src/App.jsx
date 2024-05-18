import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagina_inicial from './componentes/Pagina_inicial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Pagina_inicial/>
    </div>
  )
}

export default App
