import Connection from '../components/Connection'
import { useMap } from '../hooks/useMap'
import PipePuzzleTemplate from '../templates/PipePuzzleTemplate'
import { ILevelsEntity } from '../types'

const PipePuzzle = () => {
  const { startLevel } = useMap()

  const levels = [
    {
      level: 1,
      startLevelFunction: startLevel
    } as ILevelsEntity
  ]

  return (
    <PipePuzzleTemplate>
      <Connection levels={levels} />
    </PipePuzzleTemplate>
  )
}

export default PipePuzzle
