/* eslint-disable react/no-unescaped-entities */
import { ReadyState } from 'react-use-websocket'
import { useMap } from '../../hooks/useMap'
import { ILevelsEntity } from '../../types'
import * as S from './styles'

interface IConnectionProps {
  levels: ILevelsEntity[]
}

const Connection = ({ levels }: IConnectionProps) => {
  const mapSettings = useMap()

  return (
    <S.Wrapper>
      <div>
        <button
          onClick={() => mapSettings.startLevel('1')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 1
        </button>
        <button
          onClick={() => mapSettings.startLevel('2')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 2
        </button>
        <button
          onClick={() => mapSettings.startLevel('3')}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          level 3
        </button>
        <button
          onClick={() => mapSettings.startMap()}
          disabled={mapSettings.readyState !== ReadyState.OPEN}
        >
          start map
        </button>
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
