import { useEffect } from 'react'
import { w3cwebsocket as WebSocketConnection } from 'websocket'

export const useWebsocket = (webSocketUrl: string) => {
  const WebConnection = new WebSocketConnection(webSocketUrl)

  const sendMessage = WebConnection.onmessage
  const readyState = WebConnection.readyState
  const messageEvent = WebConnection.onmessage

  return {
    sendMessage,
    readyState,
    messageEvent
  }
}
