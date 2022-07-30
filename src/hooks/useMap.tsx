/* eslint-disable react-hooks/exhaustive-deps */
import { MAP_GAME_SOCKET_URL } from '../constants'
import { useCallback, useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'

export const useMap = () => {
  const [messageHistory, setMessageHistory] = useState([])
  const [status, setStatus] = useState('')

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    MAP_GAME_SOCKET_URL,
    { onMessage: (messageEvent) => setStatus(messageEvent.data) }
  )

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) =>
        prev.concat(lastMessage as unknown as ConcatArray<never>)
      )
    }
  }, [lastMessage, setMessageHistory])

  const rotatePipe = useCallback((x: number, y: number) => {
    sendMessage(`rotate ${x} ${y}`)
  }, [])

  const startLevel = useCallback((difficulty: string) => {
    sendMessage(`new ${difficulty}`)
  }, [])

  const startMap = useCallback(() => {
    sendMessage(`map`)
  }, [])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated'
  }[readyState]

  return {
    lastMessage,
    readyState,
    messageHistory,
    rotatePipe,
    startLevel,
    startMap,
    status,
    connectionStatus
  }
}
