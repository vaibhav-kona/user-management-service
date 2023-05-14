export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async (dispatch, getState, axiosApiInstance) => {
  console.log({ axiosApiInstance })
  const res = await axiosApiInstance.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
