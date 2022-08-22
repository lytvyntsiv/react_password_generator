import { Action } from "../types/enums/Action";
import { ActionType } from "../types/ActionType";

interface IState {
  lowercase: boolean,
  uppercase: boolean,
  numbers: boolean,
  symboles: boolean,
  easy: boolean,
  medium: boolean,
  hard: boolean,
  controled: boolean,
  showModal: boolean
}

const initialState: IState = {
  lowercase: true,
  uppercase: false,
  numbers: true,
  symboles: false,
  easy: false,
  medium: true,
  hard: false,
  controled: false,
  showModal: false
};

export const customerReducer = (state = initialState, action: ActionType): IState => {
  switch(action.type) {
    case Action.TOGGLE_SHOWMODAL: 
      return {
        ...state,
        showModal: action.payload
      }
    case Action.TOGGLE_LOWERCASE: 
      return {
        ...state,
        lowercase: action.payload
      }
    case Action.TOGGLE_UPPERCASE: 
      return {
        ...state,
        uppercase: action.payload
      }
    case Action.TOGGLE_NUMBERS: 
      return {
        ...state,
        numbers: action.payload
      }
    case Action.TOGGLE_SYMBOLES: 
      return {
        ...state,
        symboles: action.payload
      }
    case Action.TOGGLE_EASY: 
      return {
        ...state,
        easy: !state.easy,
        medium: false,
        hard: false,
        lowercase: true,
        uppercase: true,
        numbers: false,
        symboles: false
      }
    case Action.TOGGLE_MEDIUM: 
      return {
        ...state,
        easy: false,
        medium: !state.medium,
        hard: false,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symboles: false
      }
    case Action.TOGGLE_HARD: 
      return {
        ...state,
        easy: false,
        medium: false,
        hard: !state.hard,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symboles: true
      }
    case Action.TOGGLE_CONTROLED: 
      return {
        ...state,
        easy: false,
        medium: false,
        hard: false,
        controled: action.payload,
      }
    default :
      return state;
  }
}