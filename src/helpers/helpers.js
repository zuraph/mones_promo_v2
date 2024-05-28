import moment from 'moment'
import types from '../store/types'

export const i18TagMap = () => ({
	// eslint-disable-next-line jsx-a11y/heading-has-content
	h5: <h5/>,
	p: <p/>,
	ul: <ul/>,
	li: <li/>,
	b: <b/>,
	span: <span/>,
	u: <u/>,
	code: <code/>,
	center: <center/>,
	// eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content
	a: <a/>
})

export const getCookie = key => {
	return (new RegExp(key + '=(.*?); ', 'gm'))
		.exec(document.cookie + '; ')?.[1]
}

export const enumerateDaysBetween = (startDate, endDate) => {
	let start = moment(startDate),
		end = moment(endDate),
		dates = []
	
	while (start.isSameOrBefore(end)) {
		dates.push(start.format(types.DATE_FORMAT))
		start.add(1, 'days')
	}
	return dates
}

export const convertCoin = money => {
	return typeof money === 'string'
		? convertCoin(parseFloat(money))
		: typeof money === 'number'
			? (Math.floor(money) / 100).toFixed(2)
			: 0
}

export const toMoney = money => {
	return typeof money === 'string'
		? toMoney(parseFloat(money))
		: typeof money === 'number'
			? (Math.floor(money * 100)/100).toFixed(2)
			: '0.00'
}

export const getTitle = (board, t) => {
	switch (board) {
		case types.BET_COUNT:
			return t('translation:tabs.tickets')
		case types.MAX_COEF:
			return t('translation:tabs.odd')
		default:
			return t('translation:tabs.win')
	}
}

export const thousandSeparator = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const refs = {
	intervalTime: 1000*60,
	intervalId: null,
}