import React  from "react";
import useInput from "./customhook/useInput";
import { addNote } from "../store/actions/noteAction";
import { useDispatch } from "react-redux";
import { useState , useEffect } from "react";
const Form = () => {
    const [title,bindTitle,resetTitle] = useInput();
    const [content,bindContent,resetContent] = useInput();
    const [formErrors , setFormErrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false)
    const dispatch = useDispatch();
  
    const validate = (values)=>{
     const errors = {};
     if(!values.title){
       errors.title = "title is required"
     }

     return errors;
     }

     
   
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate({title:title}))
        setIsSubmit(true)
        console.log(title.length)
        if(title.length > 0){
          dispatch(addNote({title,content}))
          resetTitle();
          resetContent()
        }
    }
    useEffect(()=>{
     
     if(title.length === 0 && isSubmit){
       console.log(formErrors,"title")
       
     }
    },[formErrors])
  return (
    <div className="section ">
      <h5 className="grey-text text-darken-3">New Note</h5>

      <form className="white"onSubmit={handleSubmit} autoComplete="off">
      { title.length === 0 && isSubmit?<p className=" error-msg" >{formErrors.title}</p>:null }
        <div className="row">
          <div className="input-field  ">
            <input id="note-title" type="text" className="validate" {...bindTitle} />
            <label htmlFor="note-title">Note title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field ">
            <textarea
              id="note-content"
              className="materialize-textarea" {...bindContent}
            ></textarea>
            <label htmlFor="note-content">Note content</label>
          </div>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  );
};

export default Form;
