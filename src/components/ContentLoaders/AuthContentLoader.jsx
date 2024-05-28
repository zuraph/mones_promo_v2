import React from "react"
import ContentLoader from "react-content-loader"
import st from './ContentLoaders.module.scss'

const AuthContentLoader = (props) => (
	<ContentLoader
		speed={0.8}
		width={500}
		height={160}
		viewBox="0 0 500 40"
		backgroundColor="rgba(243, 243, 243, 0.1)"
		foregroundColor="rgba(255, 255, 255, .2)"
		className={st.authContentLoader}
		{...props}
	>
		<rect x="54" y="10" rx="3" ry="3" width="300" height="6" />
		<circle cx="20" cy="20" r="20" />
		<rect x="54" y="23" rx="3" ry="3" width="201" height="6" />
		<rect x="400" y="2" rx="5" ry="5" width="100" height="36" />
	</ContentLoader>
)

export default AuthContentLoader

