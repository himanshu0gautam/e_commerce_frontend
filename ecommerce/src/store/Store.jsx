import {configureStore} from '@reduxjs/toolkit'
import sellerReducer from './slices/Seller.slice'

export const store = configureStore({
    reducer:{
        seller:sellerReducer
    }
})