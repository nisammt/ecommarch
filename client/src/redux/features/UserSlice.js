import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isuserAuth : false,
  userData:{},
    
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state,action) => {
     state.isuserAuth = true;
     state.userData = action.payload;
        
    },
    clearUser:(state)=>{
        state.isuserAuth=false;
        state.userData ={};
    }
    

  },
})

// Action creators are generated for each case reducer function
export const {saveUser,clearUser } = userSlice.actions

export default userSlice.reducer