/* eslint-disable react/no-unescaped-entities */
import { ReadyState } from 'react-use-websocket'
import { useMap } from '../../hooks/useMap'
import { ILevelsEntity } from '../../types'
import Button from '../Button'
import * as S from './styles'

interface IConnectionProps {
  levels: ILevelsEntity[]
}

const Connection = ({ levels }: IConnectionProps) => {
  const mapSettings = useMap()

  return (
    <S.Wrapper>
      <div>
        <Button
          onClick={() => mapSettings.startLevel('1')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 1
        </Button>
        <Button
          onClick={() => mapSettings.startLevel('2')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 2
        </Button>
        <Button
          onClick={() => mapSettings.startLevel('3')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 3
        </Button>
        <Button
          onClick={() => mapSettings.startMap()}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          start map
        </Button>
        <div>
          <div>The WebSocket is currently {mapSettings.connectionStatus}</div>
          {mapSettings.lastMessage ? (
            <span>Last message: {mapSettings.lastMessage.data}</span>
          ) : null}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Connection
