import { Action } from "./enums/Action";
import { INote } from "./INote";

export type ActionType =
  | { type: Action.ADD_NOTE; payload: INote }
  | { type: Action.DELETE_NOTE; payload: number }
  | { type: Action.TOGGLE_LENGTH; payload: number }
  | { type: Action.SHOW_PASSWORD; payload: number }
  | { type: Action.UPDATE_PASSWORD; payload: string }
  | { type: Action.TOGGLE_SHOWMODAL; payload: boolean }
  | { type: Action.TOGGLE_LOWERCASE; payload: boolean }
  | { type: Action.TOGGLE_UPPERCASE; payload: boolean }
  | { type: Action.TOGGLE_NUMBERS; payload: boolean }
  | { type: Action.TOGGLE_SYMBOLES; payload: boolean }
  | { type: Action.TOGGLE_EASY; payload: boolean }
  | { type: Action.TOGGLE_MEDIUM; payload: boolean }
  | { type: Action.TOGGLE_HARD; payload: boolean }
  | { type: Action.TOGGLE_CONTROLED; payload: boolean }
  | { type: Action.COPY_PASSWORD; payload: boolean };
