import { combineReducers } from 'redux'
import skywalkersReducer from './skywalkersReducer'

const rootReducer = combineReducers({
    skywalkers: skywalkersReducer,
})

export default rootReducer;