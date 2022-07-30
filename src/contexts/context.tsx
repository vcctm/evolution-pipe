import React, { useCallback, useReducer } from 'react'
import { createContext } from 'use-context-selector'
import { reducer } from './reducer'
import { userActionTypes } from './types'

interface IGlobalProviderProps {
  children: React.ReactNode
}

interface IInitialStateProps {
  map: string | null
  startMap?: (map: string) => void
}

export const initialState: IInitialStateProps = {
  map: null
}

export const MapContext = createContext(initialState)

export const CreateMapProvider = ({ children }: IGlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const startMap = useCallback((map: string | null) => {
    dispatch({
      type: userActionTypes.SETMAP,
      map: map
    })
  }, [])

  return (
    <MapContext.Provider value={{ map: state.map, startMap }}>
      {children}
    </MapContext.Provider>
  )
}
