import { createStore, Store } from "redux";

export interface User {
  username: string;
}

export interface LoginState {
  user: User
}

export interface LoginAction {
  type: string;
  user: User;
}

const initialState: LoginState = {
  user: null
}

function loginReducer(state: LoginState = initialState, action: LoginAction) {
  switch(action.type) {
    case 'login': return { user: action.user }
    case 'logout': return { user: null }
    default: return state
  }
}

export const store : Store<LoginState> = createStore(loginReducer);