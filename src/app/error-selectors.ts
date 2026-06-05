import { AppRootState } from './store.ts'


export const selectAppError = (state: AppRootState) => state.app.error