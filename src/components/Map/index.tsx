import { useId } from 'react'
import Pipe from '../Pipe'
import * as S from './styles'

const Map = ({ map }: { map?: string }) => {
  const lineIds = useId()
  const pipeIds = useId()

  const renderMap = map
    ?.split('\n')
    .filter((line: string) => line !== 'map:')
    .map((line: string) => line.split(''))

  return (
    <div>
      {renderMap?.map((line: string[], index) => (
        <S.Wrapper key={`${lineIds}-${index}`}>
          {line.map((pipe, pipeIndex) => (
            <Pipe key={`${pipeIds}-${pipeIndex}`}>{pipe}</Pipe>
          ))}
        </S.Wrapper>
      ))}
    </div>
  )
}

export default Map
