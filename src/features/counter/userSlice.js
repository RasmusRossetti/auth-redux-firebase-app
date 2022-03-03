import { createSlice } from '@reduxjs/toolkit'

// const [userName, setUserName] = useState(null)
// const [userEmail, setUserEmail] = useState(null)

const initialState = {
  userName: null, //useState(null)
  userEmail: null //useState(null)
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName //setUserName(action.payload)
      state.userEmail = action.payload.userEmail //setUserEmail(action.payload)
    },
    setUserLogOutState: (state) => {
      state.userName = null //setUserName(null)
      state.userEmail = null //setUserEmail(null)
    }
  }
})

export const { setActiveUser, setUserLogOutState } = userSlice.actions

export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail

export default userSlice.reducer
