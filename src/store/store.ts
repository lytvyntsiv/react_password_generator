import { legacy_createStore as createStore, combineReducers, compose} from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { passwordReducer } from '../reducers/passwordReducer';
import { customerReducer } from '../reducers/customerReducer'; 
import { noteListReducer } from '../reducers/noteListReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  password: passwordReducer,
  customers: customerReducer,
  notes: noteListReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export default store;