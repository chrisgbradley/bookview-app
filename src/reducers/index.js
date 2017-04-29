import { combineReducers } from 'redux';
import BooksReducer from './reducers_book'
import ActiveBook from './reducers_active-book'

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
