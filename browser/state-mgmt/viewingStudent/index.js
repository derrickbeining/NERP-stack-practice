

// ------------------    ACTION TYPES    ---------------------

const VIEW_STUDENT = 'VIEW_STUDENT'
const UNVIEW_STUDENT = 'UNVIEW_STUDENT'

// ------------------    ACTION CREATORS    ---------------------

export const viewStudent = (student) => ({type: VIEW_STUDENT, student})
export const unviewStudent = () => ({type: UNVIEW_STUDENT})

// ------------------    THUNK CREATORS    ---------------------

// ------------------    REDUCER    ---------------------

function viewingStudentReducer (viewingStudent = {}, action) {
  switch (action.type) {
    default:
      return viewingStudent
  }
}

export default viewingStudentReducer
