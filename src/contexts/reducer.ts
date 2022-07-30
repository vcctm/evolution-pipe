import { userActionTypes } from './types'
import { initialState } from './context'

interface userActions {
  type: userActionTypes
  map: string | null
}

export const reducer = (state: typeof initialState, action: userActions) => {
  const actions = {
    [userActionTypes.SETMAP]: {
      ...state,
      map: action.map
    }
  }

  const getAction = (commingAction: userActionTypes) => {
    if (actions[commingAction]) return actions[commingAction]
    return state
  }

  return getAction(action.type)
}
