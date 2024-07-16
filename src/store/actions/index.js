import { createAction } from '@reduxjs/toolkit'
import types from '../types'
import { refs } from '../../helpers/helpers'
import moment from 'moment'

export const setMobMode = createAction(types.SET_MOB_MODE)
export const setLoading = createAction(types.SET_LOADING)
export const setAuth = createAction(types.SET_AUTH)
export const setData = createAction(types.SET_DATA)
export const getBoards = () => (dispatch, getState, api) => {
	
	// clear interval
	if (refs.intervalId) {
		clearInterval(refs.intervalId)
		refs.intervalId = null
	}
	// set loading
	dispatch(setLoading(true))
	
	const state = getState()
	const now = moment()
	const dateFrom = moment(state.dateFrom)
	const dateTo = moment(state.dateTo)
	
	
	let dt = now < dateFrom ? dateFrom : now
	dt = dt > dateTo ? dateTo : dt
	
	
	const date = state.date ?? dt.format(types.DATE_FORMAT)


	api.get('https://www.lider-bet.com/api/?app=keepAlive&mobile=new&lang=ka', {
		//params: {
		//	board: state.activeBoard,
		//	day: date
		//},
		withCredentials: true,
	})
		.then(({ data }) => {
			// hide loader
			dispatch(setLoading(false))

			// disable first load
			dispatch(setFisrtLoad(false))

			// check auth
			//dispatch(setAuth(!!data?.isAuth))
			dispatch(setAuth(data?.status))
		})
}
export const setDate = createAction(types.SET_DATE)
export const setActiveBoard = createAction(types.SET_ACTIVE_BOARD)
export const setFisrtLoad = createAction(types.SET_FIRST_LOAD)