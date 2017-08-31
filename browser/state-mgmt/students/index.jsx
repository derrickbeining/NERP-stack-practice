

// ------------------    ACTION TYPES    ---------------------

const LOAD_STUDENTS = 'LOAD_STUDENTS'
const VIEW_STUDENT = 'VIEW_STUDENT'
const UNVIEW_STUDENT = 'UNVIEW_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

// ------------------    ACTION CREATORS    ---------------------

export const loadStudents = (students) => ({type: LOAD_STUDENTS, students})
export const viewStudent = (student) => ({type: VIEW_STUDENT, student})
export const unviewStudent = () => ({type: UNVIEW_STUDENT})
export const addStudent = (student) => ({type: ADD_STUDENT, student})
export const deleteStudent = (student) => ({type: DELETE_STUDENT, student})
export const updateStudent = (student) => ({type: UPDATE_STUDENT, student})

// ------------------    THUNK CREATORS    ---------------------

// ------------------    REDUCER    ---------------------

function studentsReducer (students = [], action) {
  switch (action.type) {
    default:
      return students
  }
}

export default studentsReducer
