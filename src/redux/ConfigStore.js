import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';



const configurasiStore = () => {

    return createStore(reducer, applyMiddleware(thunk));
}

export default configurasiStore;