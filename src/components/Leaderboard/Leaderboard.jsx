import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { convertCoin, getTitle, toMoney } from '../../helpers/helpers'
import types from '../../store/types'
import LeaderboardRow from './LeaderboardRow'
import BoardContentLoader from '../ContentLoaders/BoardContentLoader'

const Leaderboard = memo(props => {
	const { t } = useTranslation()
	const mob = useSelector(state => state?.mob)
	const activeBoard = useSelector(state => state?.activeBoard)
	const board = useSelector(state => state?.boards[activeBoard])
	const isLoading = useSelector(state => state?.isLoading)
	const prize = useSelector(st => st?.prize)
	const suffix = activeBoard === types.TOTAL_WIN
		? '₾'
		: activeBoard === types.MAX_COEF
			? 'v'
			: ''
	
	// console.log('Test: ', board.ratings)
	
	return (
		<div>
			<div className="fixed-head">
				<div className="tb-head">
					<div className="col position">
						{t('translation:current_pos')}
						<span>{board.myPosition ?? '--'}</span>
					</div>
					
					{!mob &&
						<div className="col tickets">{getTitle(activeBoard, t)}</div>
					}
					<div className="col prize">{t('translation:prize')}</div>
				</div>
			</div>
			<div className="tb-outer">
				<div className="tb-body">
					{isLoading
						? <BoardContentLoader/>
						: board.data.length === 0
							? <div className="no-data">{t('translation:data_not_found')}</div>
							: board.data.map((itm, ix) => {
								const val = activeBoard === types.TOTAL_WIN
									? toMoney(convertCoin(itm.val))
									: activeBoard === types.MAX_COEF
										? toMoney(itm.val)
										: itm.val
								return (
									<LeaderboardRow
										key={ix}
										place={itm.place}
										myPosition={board.myPosition}
										userName={itm.userName}
										mob={mob}
										prize={prize?.[itm.place]?.[activeBoard] || '-'}
										rating={board.ratings[itm.val]}
										suffix={suffix}
										title={getTitle(activeBoard, t)}
										value={val}
										rawVal={itm.val}
									/>
								)
							})
					}
				</div>
			</div>
		</div>
	)
})

Leaderboard.displayName = 'Leaderboard'
Leaderboard.propTypes = {
	type: PropTypes.string,
	active: PropTypes.bool,
}

Leaderboard.defaultProps = {
	active: false
}
export default Leaderboard