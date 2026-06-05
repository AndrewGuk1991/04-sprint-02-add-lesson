import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'


export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage
  if (isAxiosError(e)) {
    errorMessage = e.response?.data?.errorMessages[0].message || e.message
  } else if (e instanceof Error) {
    errorMessage = e.message
  }
  dispatch(setAppErrorAC(errorMessage))
}