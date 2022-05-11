import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useFirestoreConnect , isLoaded , isEmpty } from 'react-redux-firebase';
import moment from 'moment';
const NoteDetail = (props) => {
    const param = useParams();
    useFirestoreConnect([{collection:'notes',doc:param.id}])
    const note = useSelector((state)=>state.firestore.data.notes&&state.firestore.data.notes[param.id])
    console.log(note)
    const markup = !isLoaded(note)?( <div className='container section'>
    <div className='card z-depth-0'>
     <div className='card-content'>
      <span className='card-title'>Loading...</span>
      
     </div>
     <div className='grey grey-text lighten-4 card-action'>
        
     </div>
    </div>
  
  </div>):(isEmpty(note)?( <div className='container section'>
      <div className='card z-depth-0'>
       <div className='card-content'>
        <span className='card-title'>There is no content here</span>
        
       </div>
       <div className='grey grey-text lighten-4 card-action'>
          
       </div>
      </div>
    
    </div>):( <div className='container section'>
      <div className='card z-depth-0'>
       <div className='card-content'>
        <span className='card-title'>{note&&note.title}</span>
        <p>{note&&note.content}</p>
       </div>
       <div className='grey grey-text lighten-4 card-action'>
           {note&& moment(note.createdAt.toDate()).calendar()}
       </div>
      </div>
    
    </div>))
  return markup
  
  
}

export default NoteDetail