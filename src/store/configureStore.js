import { createStore, applyMiddleware } from 'redux';
import { showsReducer } from '../reducers/showsReducer';
import thunk from 'redux-thunk';


export const configureStore = () => {
    const store = createStore(showsReducer, applyMiddleware(thunk));
    return store;
}


