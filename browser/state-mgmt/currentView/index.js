



// ------------------    ACTION TYPES    ---------------------

const VIEW_CAMPUSES = 'VIEW_CAMPUSES'
const VIEW_STUDENTS = 'VIEW_STUDENTS'
const SET_VIEW = 'SET_VIEW'

// ------------------    ACTION CREATORS    ---------------------

export const viewCampuses = () => ({type: VIEW_CAMPUSES})
export const viewStudentss = () => ({type: VIEW_STUDENTS})
export const setView = (view) => ({type: SET_VIEW, view})

// ------------------    THUNK CREATORS    ---------------------

// ------------------    REDUCER    ---------------------

function currentViewReducer (currentView = 'home', action) {
  switch (action.type) {
    case SET_VIEW:
      return action.view
    default:
      return currentView
  }
}

export default currentViewReducer
