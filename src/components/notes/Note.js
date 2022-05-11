import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote ,toggleFav} from '../../store/actions/noteAction'
import moment from 'moment'
import { Link } from 'react-router-dom'
import noteReducer from '../../store/reducers/noteReducer'
const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteHandler = ()=>{
        dispatch(deleteNote(note))
    }
    const toggleHandler = ()=>{
        dispatch(toggleFav(note))
    }
    const editHandler = ()=>{
        dispatch({type:"EDIT_NOTE",payload:note})
    }
    const favoriteMarkup = note.favorite?"favorite":"favorite_border"
  return (
    <div className='note white'>
        <div className='right-align'> 
        <i className='material-icons red-text' onClick={toggleHandler} style={{cursor:'pointer'}}>{favoriteMarkup}</i>
        <i className='material-icons' onClick={deleteHandler} style={{cursor:'pointer'}}>delete</i>
        </div>

        <div>
            <Link to={`/note/${note.id}`}>
            <h5 className='black-text'>{note.title}</h5>
            </Link>
            <p className='truncate'>{note.content}</p>
            <p className='grey-text'>{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className='right-align'>
                <Link to={`/editform/${note.id}`}>
            <i className='material-icons'onClick={editHandler}>edit</i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Note