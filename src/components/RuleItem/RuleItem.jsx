import PropTypes from 'prop-types'
import st from './RuleItem.module.scss'
import { memo, useState } from 'react'
import cx from 'classnames'

const RuleItem = memo(props => {
	const [open, setOpen] = useState(false);


	
	return (
		<div className={cx(st.ruleItem, { [st.open]: open })}
		     onClick={() => {
				 setOpen(prevState => !prevState)
			 }}>
			<div className={st.ruleTitle}>
				<div className={st.text}>{props.title}</div>
				<span className={st.icon}/>
			</div>
			<div className={st.ruleContent}>
				{props.children}
			</div>
		</div>
	)
})

RuleItem.displayName = 'RuleItem'

RuleItem.propTypes = {
	title: PropTypes.string,
}

export default RuleItem