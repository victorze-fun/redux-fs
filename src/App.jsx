import { useEffect } from 'react'
import { NewNote } from './components/NewNote'
import { NoteList } from './components/NoteList'
import { VisibilityFilter } from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
import { initializeNotes } from './reducers/noteReducer'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <NoteList />
    </div>
  )
}
