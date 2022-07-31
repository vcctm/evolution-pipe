import { useId } from 'react'
import { Pipe } from '../Pipe'
import Spinner from '../Spinner'
import * as S from './styles'

interface IMapProps {
  map?: string | null
  handleRotatePipe?: (x: number, y: number) => void
}

const Map = ({ map, handleRotatePipe }: IMapProps) => {
  const lineIds = useId()
  const pipeIds = useId()

  const renderMap = map
    ?.split('\n')
    .filter((line: string) => line !== 'map:')
    .map((line: string) => line.split(''))

  if (map === 'new: OK') return <Spinner />

  return (
    <div style={{ width: '100%' }}>
      {renderMap?.map((line: string[], index) => (
        <S.Wrapper key={`${lineIds}-${index}`}>
          {line.map((pipe, pipeIndex) => (
            <Pipe
              lineIndex={index}
              pipeIndex={pipeIndex}
              handleRotatePipe={handleRotatePipe}
              key={`${pipeIds}-${pipeIndex}`}
            >
              {pipe}
            </Pipe>
          ))}
        </S.Wrapper>
      ))}
    </div>
  )
}

export default Map
