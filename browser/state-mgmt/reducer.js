import {combineReducers} from 'redux'

import campuses from './campuses'
import students from './students'
import viewingCampus from './viewing-campus'
import viewingStudent from './viewing-student'

const rootReducer = combineReducers({
  campuses,
  students,
  viewingCampus,
  viewingStudent
})

export default rootReducer
export * from './campuses'
export * from './students'
export * from './viewing-campus'
export * from './viewing-student'
