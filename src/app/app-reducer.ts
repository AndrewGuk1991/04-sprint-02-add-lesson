export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'changeAppStatus':
      return {...state, status: action.payload}
    case 'setAppError':
      return {...state, error: action.payload}
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof changeAppStatusAC | typeof setAppErrorAC>

export const changeAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'changeAppStatus',
    payload: status
  } as const
}

export const setAppErrorAC = (error: string | null) => {
  return {
    type: 'setAppError',
    payload: error
  } as const
}

