import { configureStore } from '@reduxjs/toolkit'
import initialStore from './initialStore'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import api from './api'

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialStore,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk.withExtraArgument(api)]
})

export default store