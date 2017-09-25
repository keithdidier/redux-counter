import { createStore } from 'redux';
// import counter from './ducks/counter';
import reducer from './ducks/counter';

let store = createStore(reducer);

export default store;