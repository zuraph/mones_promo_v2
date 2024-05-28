import { memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { thousandSeparator } from '../../helpers/helpers'

const LeaderboardRow = memo(({ place, myPosition, userName, mob, value, suffix, title, prize, rating }) => {
	
	// console.log('Row rating: ', value, rating)
	
	return (
		<div key={place} className={cx('row', { 'my-pos': myPosition === place })}>
			<div className="col id">{place}</div>
			<div className="col player">
				<div className="avatar"/>
				<div className="name">
					{userName}
					{mob &&
						<div className="tkt-count">
							{thousandSeparator(value)}{suffix} {title}
						</div>
					}
				</div>
			</div>
			{!mob &&
				<div className="col tickets">
					<span>{thousandSeparator(value)}{suffix}</span>
				</div>
			}
			<div className="col prize">
				<span>{place <= 50 ? thousandSeparator(rating.prize) : '--'}</span>
			</div>
		</div>
	)
})

LeaderboardRow.propTypes = {
	place: PropTypes.number,
	myPosition: PropTypes.number,
	userName: PropTypes.string,
	mob: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	rawVal: PropTypes.number,
	suffix: PropTypes.string,
	title: PropTypes.string,
	prize: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	rating: PropTypes.object,
}
LeaderboardRow.displayName = 'LeaderboardRow'
export default LeaderboardRow