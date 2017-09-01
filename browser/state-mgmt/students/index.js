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

export const updatingStudent = (id) => dispatch => {
  return axios.put(`/api/students/${id}`)
    .then(res => res.data)
    .then(updatedStudent => {
      dispatch(updateStudent(updatedStudent))
      return updatedStudent
    })
    .catch(console.error.bind(console))
}

export const deletingStudent = (id) => dispatch => {
  return axios.delete(`api/students/${id}`)
}

// ------------------    REDUCER    ---------------------

function studentsReducer (students = [], action) {
  switch (action.type) {
    case ADD_STUDENT:
      return [ ...students, action.student ]
    case DELETE_STUDENT:
      return students.filter(({id}) => id !== action.student.id)
    case UPDATE_STUDENT:
      return students.map(student => {
        return student.id === action.student.id
          ? action.student
          : student
      })
    case LOAD_STUDENTS:
      return action.students
    default:
      return students
  }
}

export default studentsReducer
