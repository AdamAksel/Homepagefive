import { combineReducers } from 'redux'
import adminReducer from './adminReducer'

const allReducers = combineReducers({
  admin: adminReducer,
})

export default allReducers
