import { userActionTypes } from './types'
import { IInitialStateProps } from './context'

interface userActions {
  type?: 'SETMAP' | 'UPDATEMESSAGE' | 'VERIFYMAP'
  map?: string | null
  message?: string | null
}

export const reducer = (
  state: IInitialStateProps,
  action: userActions
): IInitialStateProps => {
  const actions = {
    ['SETMAP']: {
      ...state,
      map: action.map as string
    },
    ['UPDATEMESSAGE']: {
      ...state,
      message: action.message as string
    },
    ['VERIFYMAP']: {
      ...state,
      message: action.message as string
    }
  }

  return actions[action?.type as userActionTypes] || state
}
