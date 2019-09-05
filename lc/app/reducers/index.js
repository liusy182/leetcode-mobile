import { combineReducers } from 'redux'
import questions from './questions';
import solutions from './solutions';
import codeSnippets from './codeSnippets';

export default combineReducers({
    questions,
    solutions,
    codeSnippets
})
