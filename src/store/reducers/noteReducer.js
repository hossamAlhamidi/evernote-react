const initState = {
    noteToEdit:{}
}

const noteReducer = (state=initState , action)=>{
    switch(action.type){
    case "EDIT_NOTE":{
        return action.payload
    }
    default:
        return state
    }
}

export default noteReducer