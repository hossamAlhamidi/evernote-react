import React from 'react'
import { useSelector } from 'react-redux'
import useInput from '../customhook/useInput'
import { useDispatch } from 'react-redux'
import { updateNote } from '../../store/actions/noteAction'
import { useNavigate } from 'react-router-dom'
const EditForm = () => {
    const note = useSelector((state)=>state.note)
    console.log(note)
    const [title,bindTitle,resetTitle] = useInput(note.title);
    const [content,bindContent,resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(updateNote({id:note.id,title,content}))
        resetTitle();
        resetContent();
        navigate("/")
    }
    return (
        <div className="section ">
          <h5 className="grey-text text-darken-3">New Note</h5>
    
          <form className="white"onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field  ">
                <input id="note-title" type="text" className="validate" {...bindTitle} />
                <label className='active' htmlFor="note-title">Note title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field ">
                <textarea
                  id="note-content"
                  className="materialize-textarea" {...bindContent}
                ></textarea>
                <label className='active' htmlFor="note-content">Note content</label>
              </div>
            </div>
            <button className="btn green">Update</button>
          </form>
        </div>
      );
}

export default EditForm