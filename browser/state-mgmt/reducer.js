import {combineReducers} from 'redux'
import campuses from './campuses'
import students from './students'
import viewingCampus from './viewingCampus'
import viewingStudent from './viewingStudent'

const rootReducer = combineReducers({
  campuses,
  students,
  viewingCampus,
  viewingStudent
})

export default rootReducer
export * from './campuses'
export * from './students'
export * from './viewingCampus'
export * from './viewingStudent'
