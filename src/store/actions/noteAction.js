import { doc, deleteDoc } from "firebase/firestore";
import fbConfig from '../../config/fbConfig'
export const addNote = (note)=>{
    return (dispatch , getState , {getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('notes').add({
            ...note,
            favorite:false,
            createdAt:new Date()
        }).then(()=>{
            console.log("add note successfully")
        }).catch((err)=>{
            console.log(err)
        })
    };
}

export const deleteNote = (note) =>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        // firestore.collection('notes').doc[note.id].delete().
         deleteDoc(doc( fbConfig,'notes', note.id)).
        then(()=>{
            console.log("deleted successfully")
        }).catch(err=>{
            console.log(err,"not deleted")
        })
    }
}

export const toggleFav = (note) =>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        const favoriteStatus = !note.favorite;
        firestore.collection('notes').doc(note.id).update({
            favorite:favoriteStatus
        }).
        then(()=>{
            console.log("toggle successfully")
        }).catch(err=>{
            console.log(err,"not updated")
        })
    }
}

export const updateNote = (note) =>{
    console.log(note,"action")
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({
            title:note.title,
            content:note.content
        }).
        then(()=>{
            console.log("edit successfully")
        }).catch(err=>{
            console.log(err,"not edit")
        })
    }
}