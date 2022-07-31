import { MapProvider } from './contexts/context'
import PipePuzzle from './pages/PipePuzzle'

function App() {
  return (
    <MapProvider>
      <PipePuzzle />
    </MapProvider>
  )
}

export default App
