import { Action } from "../types/enums/Action";
import { ActionType } from "../types/ActionType";

interface IPasswordState {
  length: number,
  password: string,
  copied: boolean
}

const initialState: IPasswordState = {
  length: 12,
  password: '',
  copied: false
};

export const passwordReducer = (state = initialState, action: ActionType): IPasswordState => {
  switch(action.type) {
    case Action.TOGGLE_LENGTH: 
      return {
        ...state,
        length: action.payload
      }
    case Action.UPDATE_PASSWORD: 
      return {
        ...state,
        password: action.payload
      }
    case Action.COPY_PASSWORD: 
      return {
        ...state,
        copied: action.payload
      }
    default :
      return state;
  }
};