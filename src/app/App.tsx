import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppDispatch, useAppSelector } from './store.ts'
import { selectStatus } from './app-selectors.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)

  return (
    <div>
      {status === 'loading' && <LinearLoader/>}
      <Decks />
      <GlobalError />
    </div>
  )
}
