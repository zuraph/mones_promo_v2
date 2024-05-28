import { createReducer } from '@reduxjs/toolkit'
import initialStore from '../initialStore'
import types from '../types'

const rootReducer = createReducer(initialStore, {
	[types.SET_MOB_MODE]: (state, action) => {
		state.mob = action.payload
	},
	[types.SET_DATE]: (state, action) => {
		state.date = action.payload
	},
	[types.SET_AUTH]: (state, action) => {
		state.auth = action.payload
	},
	[types.SET_LOADING]: (state, action) => {
		state.isLoading = action.payload
	},
	[types.SET_DATA]: (state, action) => {
		
		
		const ratingTable = {}
		for (const itm of action.payload.data) {
			let place = Math.min(itm.place, 50)
			// let place = itm.place
			
			if (ratingTable.hasOwnProperty(itm.val)) {
				ratingTable[itm.val].prizeTotal += state.prize[place][action.payload.name]
				ratingTable[itm.val].count += 1
				ratingTable[itm.val].prize = Math.floor(ratingTable[itm.val].prizeTotal * 100 / ratingTable[itm.val].count) / 100
			}
			else {
				ratingTable[itm.val] = {
					prizeTotal: state.prize[place][action.payload.name],
					prize: state.prize[place][action.payload.name],
					count: 1
				}
			}
			
		}
		
		// console.log('Ratings: ', ratingTable)
		
		state.boards[action.payload.name] = {
			myPosition: action.payload.myPos,
			data: action.payload.data,
			ratings: ratingTable
		}
	},
	[types.SET_ACTIVE_BOARD]: (state, action) => {
		state.activeBoard = action.payload
	},
	[types.SET_FIRST_LOAD]: (state, action) => {
		state.firstLoad = action.payload
	},
	
})

export default rootReducer