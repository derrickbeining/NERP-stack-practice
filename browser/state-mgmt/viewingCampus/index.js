

// ------------------    ACTION TYPES    ---------------------

const VIEW_CAMPUS = 'VIEW_CAMPUS'
const UNVIEW_CAMPUS = 'UNVIEW_CAMPUS'

// ------------------    ACTION CREATORS    ---------------------

export const viewCampus = (campus) => ({type: VIEW_CAMPUS, campus})
export const unviewCampus = () => ({type: UNVIEW_CAMPUS})

// ------------------    REDUCER    ---------------------

function viewingCampusReducer (viewingCampus = {}, action) {
  switch (action.type) {
    case VIEW_CAMPUS:
      return action.campus
    case UNVIEW_CAMPUS:
      return {}
    default:
      return viewingCampus
  }
}

export default viewingCampusReducer
