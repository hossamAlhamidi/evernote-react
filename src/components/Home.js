import React , {useEffect} from 'react'
import Form from './Form'
import { useSelector  } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NoteList from './notes/NoteList'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export const Home = () => {
 
  useFirestoreConnect([{collection:'notes',orderBy:["createdAt",'desc']}])
  const notes = useSelector((state) => state.firestore.ordered.notes)
  
  console.log(notes)


  return (
      <div className='container'>
    <div className='row center-align'>
        <div className='col s10 m7'><Form/></div>
        <div className='col s10 m5'><NoteList notes={notes}/></div>
    </div>

    </div>
  )
}
