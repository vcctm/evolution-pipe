import useWebSocket from 'react-use-websocket'

import LevelSelect from '../../components/LevelSelect'
import Map from '../../components/Map'
import { useMap } from '../../hooks/useMap'
import PipePuzzleTemplate from '../../templates/PipePuzzleTemplate'
import { ILevelsEntity } from '../../types'
import { MAP_GAME_SOCKET_URL } from '../../constants'
import * as S from './styles'
import { useMapContext } from '../../hooks/useContext'

const PipePuzzle = () => {
  const { startMap, message, map } = useMapContext()

  const handleMessageEvent = (messageEvent: MessageEvent<any>) => {
    if ((messageEvent.data as string).includes('map:')) {
      startMap && startMap(messageEvent.data as string)
    }
  }

  const { sendMessage, readyState } = useWebSocket(MAP_GAME_SOCKET_URL, {
    onMessage: handleMessageEvent
  })

  const { startLevel, rotatePipe, connectionStatus } = useMap(
    sendMessage,
    readyState
  )

  const handleStartLevel = (level: string) => {
    startMap && startMap('new: OK')
    startLevel(level)
    sendMessage('map')
  }

  const handleRotatePipe = (x: number, y: number) => {
    rotatePipe(x, y)
  }

  const levels = [
    {
      level: 1,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity,
    {
      level: 2,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity,
    {
      level: 3,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity,
    {
      level: 4,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity
  ]

  return (
    <PipePuzzleTemplate>
      <h1>Pipe Puzzle</h1>
      <S.MapWrapper>
        <Map map={map} handleRotatePipe={handleRotatePipe} />
      </S.MapWrapper>
      <S.LevelSelectWrapper>
        <LevelSelect
          levels={levels}
          lastMessage={message}
          readyState={readyState}
          connectionStatus={connectionStatus}
        />
      </S.LevelSelectWrapper>
    </PipePuzzleTemplate>
  )
}

export default PipePuzzle
