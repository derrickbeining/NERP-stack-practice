import axios from 'axios'

// ------------------    ACTION TYPES    ---------------------

const LOAD_CAMPUSES = 'LOAD_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

// ------------------    ACTION CREATORS    ---------------------

export const loadCampuses = (campuses) => ({type: LOAD_CAMPUSES, campuses})
export const addCampus = (campus) => ({type: ADD_CAMPUS, campus})
export const deleteCampus = (campus) => ({type: DELETE_CAMPUS, campus})
export const updateCampus = (campus) => ({type: UPDATE_CAMPUS, campus})

// ------------------    THUNK CREATORS    ---------------------

export const fetchingCampuses = () => dispatch => {
  return axios.get('api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(loadCampuses(campuses))
      return campuses
    })
    .catch(console.error.bind(console))
}

export const updatingCampus = (id) => dispatch => {
  return axios.put(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(updatedCampus => {
      dispatch(updateCampus(updatedCampus))
      return updatedCampus
    })
    .catch(console.error.bind(console))
}

export const deletingCampus = (id) => dispatch => {
  return axios.delete(`api/campuses/${id}`)
}

// ------------------    REDUCER    ---------------------

function campusesReducer (campuses = [], action) {
  switch (action.type) {
    case ADD_CAMPUS:
      return [ ...campuses, action.campus ]
    case DELETE_CAMPUS:
      return campuses.filter(({id}) => id !== action.campus.id)
    case UPDATE_CAMPUS:
      return campuses.map(campus => {
        return campus.id === action.campus.id
          ? action.campus
          : campus
      })
    case LOAD_CAMPUSES:
      return action.campuses
    default:
      return campuses
  }
}

export default campusesReducer
