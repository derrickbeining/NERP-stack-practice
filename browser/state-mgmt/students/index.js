import axios from 'axios'

// ------------------    ACTION TYPES    ---------------------

const LOAD_STUDENTS = 'LOAD_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

// ------------------    ACTION CREATORS    ---------------------

export const loadStudents = (students) => ({type: LOAD_STUDENTS, students})
export const addStudent = (student) => ({type: ADD_STUDENT, student})
export const deleteStudent = (student) => ({type: DELETE_STUDENT, student})
export const updateStudent = (student) => ({type: UPDATE_STUDENT, student})

// ------------------    THUNK CREATORS    ---------------------

export const fetchingStudents = () => dispatch => {
  return axios.get('api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(loadStudents(students))
      return students
    })
    .catch(console.error.bind(console))
}

// ------------------    REDUCER    ---------------------

function studentsReducer (students = [], action) {
  switch (action.type) {
    case LOAD_STUDENTS:
      return action.students
    default:
      return students
  }
}

export default studentsReducer
