import { MapContext } from '../contexts/context'
import { useContextSelector } from 'use-context-selector'

export const useMapContext = () => {
  const map = useContextSelector(MapContext, (state) => state.map)
  const message = useContextSelector(MapContext, (state) => state.message)
  const updateMessage = useContextSelector(
    MapContext,
    (state) => state.updateMessage
  )
  const startMap = useContextSelector(MapContext, (state) => state.startMap)

  return {
    map,
    message,
    updateMessage,
    startMap
  }
}
