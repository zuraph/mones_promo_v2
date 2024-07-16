import types from './types'

const initialStore = {
	auth: false,
	mob: false,
	date: null,
	dateFrom: '2024-03-05',
	dateTo: '2025-03-06',
	isLoading: true,
	firstLoad: true,
	activeBoard: types.BET_COUNT,
	boards: {
		[types.BET_COUNT]: {
			myPosition: null,
			data: []
		},
		[types.MAX_COEF]: {
			myPosition: null,
			data: []
		},
		[types.TOTAL_WIN]: {
			myPosition: null,
			data: []
		}
	},
	prize: {
		1:	{ [types.BET_COUNT]: 500,	[types.MAX_COEF]: 350, [types.TOTAL_WIN]: 1000 },
		2:	{ [types.BET_COUNT]: 400,	[types.MAX_COEF]: 300, [types.TOTAL_WIN]: 700 },
		3:	{ [types.BET_COUNT]: 300,	[types.MAX_COEF]: 250, [types.TOTAL_WIN]: 600 },
		4:	{ [types.BET_COUNT]: 250,	[types.MAX_COEF]: 200, [types.TOTAL_WIN]: 500 },
		5:	{ [types.BET_COUNT]: 200,	[types.MAX_COEF]: 150, [types.TOTAL_WIN]: 400 },
		6:	{ [types.BET_COUNT]: 150,	[types.MAX_COEF]: 100, [types.TOTAL_WIN]: 300 },
		7:	{ [types.BET_COUNT]: 100,	[types.MAX_COEF]: 90,  [types.TOTAL_WIN]: 200 },
		8:	{ [types.BET_COUNT]: 100,	[types.MAX_COEF]: 80,  [types.TOTAL_WIN]: 100 },
		9:	{ [types.BET_COUNT]: 100,	[types.MAX_COEF]: 70,  [types.TOTAL_WIN]: 100 },
		10:	{ [types.BET_COUNT]: 100,	[types.MAX_COEF]: 60,  [types.TOTAL_WIN]: 100 },
		11:	{ [types.BET_COUNT]: 90,	[types.MAX_COEF]: 50,  [types.TOTAL_WIN]: 100 },
		12:	{ [types.BET_COUNT]: 80,	[types.MAX_COEF]: 40,  [types.TOTAL_WIN]: 100 },
		13:	{ [types.BET_COUNT]: 70,	[types.MAX_COEF]: 30,  [types.TOTAL_WIN]: 100 },
		14:	{ [types.BET_COUNT]: 60,	[types.MAX_COEF]: 20,  [types.TOTAL_WIN]: 90 },
		15:	{ [types.BET_COUNT]: 50,	[types.MAX_COEF]: 20,  [types.TOTAL_WIN]: 80 },
		16:	{ [types.BET_COUNT]: 50,	[types.MAX_COEF]: 10,  [types.TOTAL_WIN]: 70 },
		17:	{ [types.BET_COUNT]: 30,	[types.MAX_COEF]: 10,  [types.TOTAL_WIN]: 60 },
		18:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 10,  [types.TOTAL_WIN]: 50 },
		19:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 40 },
		20:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 30 },
		21:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 20 },
		22:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		23:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		24:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		25:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		26:	{ [types.BET_COUNT]: 20,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		27:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		28:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		29:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		30:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		31:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		32:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		33:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		34:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		35:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		36:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		37:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		38:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		39:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		40:	{ [types.BET_COUNT]: 10,	[types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		41:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		42:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		43:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		44:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 10 },
		45:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 },
		46:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 },
		47:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 },
		48:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 },
		49:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 },
		50:	{ [types.BET_COUNT]: 5,	    [types.MAX_COEF]: 5,   [types.TOTAL_WIN]: 5 }
	}
}

export default initialStore