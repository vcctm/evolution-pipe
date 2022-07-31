import React, { useCallback, useReducer } from 'react'
import { createContext } from 'use-context-selector'
import { reducer } from './reducer'

interface IGlobalProviderProps {
  children: React.ReactNode
}

export interface IInitialStateProps {
  map: string | null
  message: string | null
  startMap?: (map: string) => void
  updateMessage?: (message: string) => void
}

export const initialState: IInitialStateProps = {
  map: null,
  message: null
}

export const MapContext = createContext(initialState)

export const MapProvider = ({ children }: IGlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const startMap = useCallback((map: string | null) => {
    dispatch({
      type: 'SETMAP',
      map: map
    })
  }, [])

  const updateMessage = useCallback((message: string | null) => {
    dispatch({
      type: 'UPDATEMESSAGE',
      message: message
    })
  }, [])

  return (
    <MapContext.Provider
      value={{
        map: state.map,
        message: state.message,
        startMap,
        updateMessage
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
