import { INote } from "../types/INote";
import { Action } from "../types/enums/Action";
import { ActionType } from "../types/ActionType";

interface INoteListState {
  notes: INote[]
}

const initialState: INoteListState = {
  notes: []
};

export const noteListReducer = (state = initialState, action: ActionType): INoteListState => {
  switch(action.type) {
    case Action.ADD_NOTE: 
      return {
        notes: [...state.notes, action.payload]
      }
    case Action.DELETE_NOTE: 
      return {
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case Action.SHOW_PASSWORD: 
      return {
        notes: state.notes.map(note => {
          return (note.id === action.payload) ? {...note, showPassword: !note.showPassword} : note;
        })
      }
    default :
      return state;
  }
};