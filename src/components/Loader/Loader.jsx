import st from './Loader.module.scss'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Loader = props => {
	return (
		<div className={cx(st.loader, props.className)}>
			<div className={st.bounce1} />
			<div className={st.bounce2} />
			<div className={st.bounce3} />
		</div>
	)
}

Loader.propTypes = {
	className: PropTypes.string,
}

export default Loader