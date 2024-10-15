import { configureStore } from '@reduxjs/toolkit'
import  User  from './slices/user.slice'
import  isLoading  from './slices/isLoading.slice'

export default configureStore({
    reducer: {
        isLoading:isLoading,
        User:User
    }
})
