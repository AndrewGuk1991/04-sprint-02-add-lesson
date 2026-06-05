import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { changeAppStatusAC } from '../../app/app-reducer.ts'
import { isAxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(changeAppStatusAC('loading'))
    const res = await decksAPI.fetchDecks()
    dispatch(changeAppStatusAC('succeeded'))
    dispatch(setDecksAC(res.data.items))
  } catch (error: any) {
    console.log(error.message)
    dispatch(changeAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e) {
    let errorMessage
    if (isAxiosError(e)) {
      errorMessage = e.response?.data?.errorMessages[0].message || e.message
    } else if (e instanceof Error) {
      errorMessage = e.message
    }
    console.log(errorMessage)
  }
}
