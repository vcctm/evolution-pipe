import useWebSocket from 'react-use-websocket'
import { memo, useCallback, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import LevelSelect from '../../components/LevelSelect'
import Map from '../../components/Map'
import { useMap } from '../../hooks/useMap'
import PipePuzzleTemplate from '../../templates/PipePuzzleTemplate'
import { ILevelsEntity } from '../../types'
import { MAP_GAME_SOCKET_URL } from '../../constants'
import * as S from './styles'
import { useMapContext } from '../../hooks/useContext'
import NewGame from '../../components/NewGame'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const PipePuzzleComponent = () => {
  const { startMap, message, map } = useMapContext()
  const [openModal, setOpenModal] = useState(false)
  const [validMessage, setValidMessage] = useState<string | null>(null)

  const handleMessageEvent = (messageEvent: MessageEvent<unknown>) => {
    if ((messageEvent.data as string).includes('map:')) {
      startMap && startMap(messageEvent.data as string)
    }
    if ((messageEvent.data as string).includes('verify:')) {
      setValidMessage(messageEvent.data as string)
    }
  }

  const { sendMessage, readyState } = useWebSocket(MAP_GAME_SOCKET_URL, {
    onMessage: handleMessageEvent,
    filter: () => false
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

  const handleRotatePipe = useCallback(
    (x: number, y: number) => {
      rotatePipe(x, y)
      sendMessage('map')
    },
    [rotatePipe, sendMessage]
  )

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
    } as ILevelsEntity,
    {
      level: 5,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity,
    {
      level: 6,
      startLevelFunction: handleStartLevel
    } as ILevelsEntity
  ]

  const handleVerify = () => {
    setValidMessage(null)
    sendMessage('verify')
    setOpenModal((prev) => !prev)
  }

  const MapComponent = () => {
    if (!map) {
      return <NewGame />
    }
    return (
      <S.MapWrapper>
        <Map map={map} handleRotatePipe={handleRotatePipe} />
      </S.MapWrapper>
    )
  }

  return (
    <>
      <Modal
        closeModal={setOpenModal}
        message={validMessage}
        modalOpen={openModal}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <S.Typography>
          Pipe <b>Puzzle</b>
        </S.Typography>
        {map && (
          <Button icon={<FaCheckCircle />} onClick={() => handleVerify()}>
            VerifyMap
          </Button>
        )}
      </div>
      <PipePuzzleTemplate>
        <MapComponent />
        <S.LevelSelectWrapper>
          <LevelSelect
            levels={levels}
            lastMessage={message}
            readyState={readyState}
            connectionStatus={connectionStatus}
          />
        </S.LevelSelectWrapper>
      </PipePuzzleTemplate>
    </>
  )
}

const PipePuzzle = memo(PipePuzzleComponent)

export default PipePuzzle
