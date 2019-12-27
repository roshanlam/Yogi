import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //optional

export default createStore(applyMiddleware(thunk));
