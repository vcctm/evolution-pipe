/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { ReadyState, SendMessage } from 'react-use-websocket'

export const useMap = (sendMessage: SendMessage, readyState: ReadyState) => {
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
    readyState,
    rotatePipe,
    startLevel,
    startMap,
    connectionStatus
  }
}
