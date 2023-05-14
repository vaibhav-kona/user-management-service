export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async (dispatch, getState, axiosApiInstance) => {
  const res = await axiosApiInstance.get('/users')
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, axiosApiInstance) => {
  const res = await axiosApiInstance.get('/current_user')
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}
