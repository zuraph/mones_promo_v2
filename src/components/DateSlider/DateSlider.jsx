import { useDispatch, useSelector } from 'react-redux'
import { enumerateDaysBetween } from '../../helpers/helpers'
import moment from 'moment'
import types from 'store/types'
import { useState } from 'react'
import { setDate } from '../../store/actions'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import cx from 'classnames'

const DateSlider = props => {
	const dateFrom = useSelector(state => state?.dateFrom)
	const dateTo = useSelector(state => state?.dateTo)
	const dates = enumerateDaysBetween(dateFrom, dateTo)
	const now = moment()
	const today = now > moment(dateTo) ? moment(dateTo) : now
	const todayIndex = dates.indexOf(today.format(types.DATE_FORMAT))
	const dispatch = useDispatch()
	const [swiper, setSwiper] = useState(null)
	const [activeIndex, setActiveIndex] = useState(todayIndex)
	
	
	return (
		<div className='date-slider-wrapper'>
			<div className='prev-btn' />
			<Swiper
				initialSlide={todayIndex}
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={8}
				onSwiper={(swp) => setSwiper(swp)}
				navigation={{
					prevEl: '.prev-btn',
					nextEl: '.next-btn'
				}}
				className={'date-slider'}
				slideToClickedSlide={true}
				onClick={((sw, event) => {
					swiper.slideTo(swiper.clickedIndex)
					if (swiper.clickedIndex <= todayIndex) {
						setActiveIndex(swiper.clickedIndex)
						dispatch(setDate(dates[swiper.clickedIndex]))
					}
				})}
				centeredSlides={true}
				centerInsufficientSlides={true}
				centeredSlidesBounds={true}
				breakpoints={{
					600: {
						slidesPerView: 3,
						spaceBetween: 5
					},
					1000: {
						slidesPerView: 5
					},
					1260: {
						slidesPerView: 8
					},
					"@0.00": {
						slidesPerView: 3,
						spaceBetween: 5
					},
				}}
			>
				{dates.map((dt, ix) => (
					<SwiperSlide
						key={ix}
						className={cx({
							'active': ix === activeIndex,
							'disabled': ix > todayIndex
						})}
					>
						{moment(dt).format(types.DATE_FORMAT_DM)}
					</SwiperSlide>
				))}
			</Swiper>
			<div className='next-btn' />
		</div>
		
	)
}

export default DateSlider